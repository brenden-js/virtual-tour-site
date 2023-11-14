import dynamicQuoteGenerator, {allCachedRegionData, type AllRegionData, type RegionData,} from "@/types/quote-gen";
import {PricingBlock} from "@/components/pricing-block";
import {api} from "@/trpc/server";
import {CheckmarkIcon} from "react-hot-toast";


export default async function QuoteDetails({params}: { params: { houseId: string } }) {
  const house = await api.quote.getQuote.query(params.houseId)
  console.log("House", house);
  if (!house) {
    return <div>Could not find that quote.</div>
  }
  const price = dynamicQuoteGenerator(
    allCachedRegionData[house.region as keyof AllRegionData][house.tourType as keyof RegionData],
    house.sqft
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <main className="flex min-h-screen grow flex-col items-center">
      {house && (
        <div className="flex max-w-screen-2xl flex-col items-center justify-center p-8 md:p-16">
          <div className="flex align-center justify-center rounded-full bg-gray-100 px-6 py-3">
            <CheckmarkIcon className="mr-3"/>
            <h6 className="font-bold text-gray-600">
              Booking request confirmed
            </h6>
          </div>
          <p className="mt-2 inline-block text-gray-800 text-sm">A confirmation has been sent to your email.</p>
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
            <div className={'mb-2 flex w-full items-center justify-between'}>
              <div className="flex flex-col text-left">
                <h5 className="font-semibold md:text-lg">
                  3D Matterport Tour Capture and Hosting
                </h5>
                {house.tourType === "tour_and_floorplans" ? ("+ Floorplans") : ("")}
              </div>
              <h5 className="font-semibold md:text-lg">
                {price}
              </h5>
            </div>
          </div>
          <div className="mt-16">
            <PricingBlock type={'quote'} price={price} showLearnMoreButton={true} />
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
