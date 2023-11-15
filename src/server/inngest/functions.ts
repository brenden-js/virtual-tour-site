import {inngest} from "./client";
import {ServerClient} from 'postmark'
import {env} from "@/env.mjs";
import dynamicQuoteGenerator, {allCachedRegionData, AllRegionData, RegionData} from "@/types/quote-gen";
import axios, {type AxiosResponse} from "axios";
import {SearchContactResponse} from "@/server/inngest/hubspot-types";


export const newQuoteCreatedProcesses = inngest.createFunction(
  {id: 'guest-create-quote'},
  {event: 'quote/guest.created'},
  async ({event, step}) => {
    console.log('CREATE GUEST QUOTE EVENT...', event);

    if (env.NODE_ENV !== 'development') {
      await step.run("Send confirmation email", async () => {

        const client = new ServerClient(env.POSTMARK_API_TOKEN);
        await client.sendEmail({
          "From": `system@viewport.marketing`,
          "To": event.data.email,
          "Subject": `Booking request confirmation for ${event.data.stAddress}`,
          "HtmlBody": `<strong>Hi ${event.data.name}, we have received your booking request!</strong> We will reach out to you shortly to confirm a time! You can view your quote at <a>${process.env.NODE_ENV === 'development' ? 'localhost:3000/quote/' : 'viewport.marketing/quote/'}${event.data.houseId}</a>`,
          "TextBody": `We have received your order for ${event.data.stAddress}`,
          "MessageStream": "outbound"
        });
        return {msg: 'success'}

      });

      await step.run("Send admin notification email", async () => {

        const client = new ServerClient(env.POSTMARK_API_TOKEN);
        await client.sendEmail({
          "From": `system@viewport.marketing`,
          "To": env.ADMIN_EMAIL,
          "Subject": `${process.env.NODE_ENV === 'development' ? 'DEV - ' : ''}New booking request - ${event.data.stAddress}`,
          "HtmlBody": `<div>
                        <p>Reach out to schedule their appointment:</p>
                        <a>
                            ${process.env.NODE_ENV === 'development' ? 'localhost:3000/quote/' : 'viewport.marketing/quote/'}${event.data.houseId}
                        </a>
                    </div>`,
          "TextBody": `New lead - ${event.data.stAddress}`,
          "MessageStream": "outbound"
        })
      });
    }

    const dealId = await step.run("Add deal to hubspot pipeline", async () => {
      // add house as a deal to hubspot
      const now = new Date();
      const price = dynamicQuoteGenerator(allCachedRegionData[event.data.region as keyof AllRegionData][event.data.tourType as keyof RegionData], event.data.sqft)

      const apiResponse: AxiosResponse = await axios({
          method: "POST",
          url: `https://api.hubapi.com/crm/v3/objects/deals`,
          headers: {
            'Authorization': `Bearer ${env.HUBSPOT_TOKEN}`,
            'Content-Type': 'application/json'
          },
          data: {
            properties: {
              "amount": parseInt(price.toFixed(2)),
              "closedate": new Date(now.setDate(now.getDate() + 7)).toISOString(), // 3 days til close
              "dealname": `${event.data.stAddress}, ${event.data.city} ID: ${event.data.houseId}`,
              "dealstage": "46880866",
              "hubspot_owner_id": "201360773",
              "pipeline": "default"
            }
          }
        }
      );
      console.log(apiResponse);
      const data = apiResponse.data as { id: string }
      return data.id
    })

    const contactId = await step.run('Add this contact to hubspot', async () => {
          try {
            const apiResponse: AxiosResponse = await axios({
              method: "POST",
              url: `https://api.hubapi.com/crm/v3/objects/contacts`,
              headers: {
                'Authorization': `Bearer ${env.HUBSPOT_TOKEN}`,
                'Content-Type': 'application/json'
              },
              data: {
                properties: {
                  "email": event.data.email,
                  "firstname": event.data.name,
                  "phone": event.data.phone
                }
              }
            })
            const data = apiResponse.data as { id: string }
            return data.id
          } catch (e) {
            if (axios.isAxiosError(e)) {
              if (e.response?.status === 409) {

                // contact already exists, search it in hubspot and get the id
                const getContactResponse = await axios({
                  method: "POST",
                  url: `https://api.hubapi.com/crm/v3/objects/contacts/search`,
                  headers: {
                    'Authorization': `Bearer ${env.HUBSPOT_TOKEN}`,
                    'Content-Type': 'application/json'
                  },
                  data: {
                    "filterGroups": [
                      {
                        "filters": [
                          {
                            "propertyName": "email",
                            "operator": "EQ",
                            "value": event.data.email
                          }
                        ]
                      }
                    ]
                  }
                });
                console.log('getContactResponse logged: ', getContactResponse)
                const data = getContactResponse.data as SearchContactResponse
                if (!data.results || data.results?.length === 0) {
                  throw new Error('No contact found')
                }
                return data.results[0]!.id
              }
            } else {
              console.log('Unknown error creating contact', e)
            }
          }
        }
      )
    ;

    // associate contact with deal
    await step.run('Associate contact with deal', async () => {
        if (contactId === 'unknown') {
          throw new Error('Unknown contact id, cannot associate with deal');
        }
        await axios({
            method: "PUT",
            url: `https://api.hubapi.com/crm/v4/objects/deals/${dealId}/associations/contacts/${contactId}`,
            headers: {
              'Authorization': `Bearer ${process.env.HUBSPOT_TOKEN}`,
              'Content-Type': 'application/json'
            },
            data: [{associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3}]
          }
        );
        return
      }
    )
  }
);