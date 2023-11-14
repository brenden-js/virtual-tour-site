import { inngest } from "./client";
import {ServerClient} from 'postmark'
import {env} from "@/env.mjs";


export const quoteCreationNotifications = inngest.createFunction(
  {id: 'guest-create-quote'},
  {event: 'quote/guest.created'},
  async ({event, step}) => {
    console.log('CREATE GUEST QUOTE EVENT...', event);

    await step.run("Send confirmation email", async () => {

      const client = new ServerClient(env.POSTMARK_API_TOKEN);
      await client.sendEmail({
        "From": `${process.env.NODE_ENV === 'development' ? 'DEV-system@viewport.marketing' : 'system@viewport.marketing'}`,
        "To": event.data.email,
        "Subject": `Booking request confirmation for ${event.data.stAddress}`,
        "HtmlBody": `<strong>Hi ${event.data.name}, we have received your booking request!</strong> We will reach out to you shortly to confirm a time! You can view your quote at <a>${process.env.NODE_ENV === 'development' ? 'localhost:3000/quote/' : 'viewport.marketing/quote/'}${event.data.houseId}</a>`,
        "TextBody": `We have received your order for ${event.data.stAddress}`,
        "MessageStream": "outbound"
      });
      return {msg: 'success'}

    });

    await step.run("Send admin notification email", async () => {

      const client = new ServerClient(env.POSTMARK_API_TOKEN );
      await client.sendEmail({
        "From": `${process.env.NODE_ENV === 'development' ? 'DEV-system@viewport.marketing' : 'system@viewport.marketing'}`,
        "To": 'brenden@stratosource.dev',
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
);