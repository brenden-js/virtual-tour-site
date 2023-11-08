import dayjs from "dayjs";
import dynamicQuoteGenerator, {allCachedRegionData, type RegionData,} from "@/types/quote-gen";
import {prisma} from "@/lib/db";
import {PricingBlock} from "@/components/pricing-block";

const getHouse = async (houseId: string) => {
  return prisma.house.findUnique({
      where: {
        id: houseId,
      },
      include: {
        customer: {
          select: {
            name: true
          }
        }
      }
    }
  );
}

export default async function QuoteDetails({params}: { params: { houseId: string } }) {
  const house = await getHouse(params.houseId);
  console.log("House", house);
  const price = dynamicQuoteGenerator(
    allCachedRegionData[house!.region][
      house!.matterportType as keyof RegionData
      ],
    house!.sqft || 0
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <main className="flex min-h-screen grow flex-col items-center">
      {house && (
        <div className="flex max-w-screen-2xl flex-col items-center justify-center p-8 md:p-16">
          <div className="rounded-full bg-muted px-6 py-2">
            <p className="font-bold text-muted-foreground">
              QUOTE
            </p>
          </div>
          {house.customer && (
            <div className="my-3 rounded-full ">
              <p className="font-bold">
                {`Prepared for ${house.customer.name}`}
              </p>
            </div>
          )}

          <div className="my-8 flex grow items-center justify-between">
            <div>
              <h1 className="text-center text-4xl font-bold">{house.stAddress}</h1>
              <p className="text-center text-2xl">{`${house.city}, ${house.state} ${house.zipCode}`}</p>
              {/*<div>*/}
              {/*  <p className="ml-1 mt-2 text-center text-sm text-gray-500">*/}
              {/*    {`Created on ${dayjs(house.createdAt).format("dddd MM/DD")}`}*/}
              {/*  </p>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={'flex w-full flex-col items-center justify-between rounded-lg border p-3 md:p-10'}>
            <div className={'mb-2 flex w-full items-center justify-between border-b'}>
              <p className="mr-1 md:text-lg">
                Service
              </p>
              <h5 className="font-semibold md:text-lg">
                3D Matterport Tour Capture and Hosting
              </h5>
              {house.matterportType === "tour_and_floorplans" ? ("Tour and Floorplans included") : (
                <></>
              )
              }
            </div>
            <div className={'mb-2 flex w-full items-center justify-between border-b'}>
              <p className="mr-1 md:text-lg">
                Price
              </p>
              <h5 className="font-semibold md:text-lg">
                {price}
              </h5>
              {house.matterportType === "tour_and_floorplans" ? ("Tour and Floorplans included") : (
                <></>
              )
              }
            </div>
          </div>
          {/*<p className="text-md text-gray-700">*/}
          {/*  {house.hostingType === "self_hosted"*/}
          {/*    ? "Self hosted tour (your Matterport account)"*/}
          {/*    : "Viewport hosted tour (our Matterport account)"}*/}
          {/*</p>*/}
          {/*<h2 className="mt-2 text-2xl font-semibold md:mt-8">*/}
          {/*  Your request for service has been received.*/}
          {/*</h2>*/}
          {/*<p className="mt-1 inline-block text-xl"> We will reach out via email shortly!</p>*/}
          <div className="mt-16">
            <PricingBlock type={'quote'} price={price} showLearnMoreButton={true}/>
          </div>
          {/*<div>*/}
          {/*  <button*/}
          {/*    className="mt-8 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">*/}
          {/*    Download quote as PDF*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      )}
    </main>
  );
};
