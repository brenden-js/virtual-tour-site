"use client"
import {useState} from "react";
import {type AllRegionData} from "@/types/quote-gen";
import {ServiceAreaStep} from "@/components/create-quote/steps/1-service-area";
import {SquareFootageStep} from "@/components/create-quote/steps/2-sqft";
import {MatterportStep} from "@/components/create-quote/steps/3-matterport";
import {AvailabilityStep} from "@/components/create-quote/steps/6-availability";
import RecapStep from "@/components/create-quote/steps/7-recap";
import {Faq} from "@/components/create-quote/steps/faq";
import {LargeTestimonial} from "@/components/create-quote/steps/largeTestimonial";
import {AddressStep} from "@/components/create-quote/steps/5-address";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {DownArrow} from "@/components/icons/down-arrow";
import {PhoneIcon} from "@heroicons/react/20/solid";
import {env} from "@/env.mjs";


export type QuoteData = {
  stAddress: string;
  city: string;
  zipCode: string;
  region: keyof AllRegionData;
  tourType: string;
  sqft: string;
  name: string;
  email: string;
  phone: string;
  requestedTimes: Array<string>;
};

const Index = () => {
  const [selectedTimes, setSelectedTimes] = useState<Array<string>>([]);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    stAddress: "",
    city: "",
    zipCode: "",
    tourType: "",
    sqft: "",
    region: "none",
    name: "",
    email: "",
    phone: "",
    requestedTimes: selectedTimes,
  });

  return (
    <>
      {/*to add snapping back add this to the classname-> md:snap-y md:snap-mandatory max-h-screen overflow-scroll*/}
      <main>
        <div className="flex flex-col ">

          {/* Hero */}
          <div className="flex shrink-0 snap-center snap-always flex-col items-center justify-center py-36">
            <h1 className="text-center font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Let&apos;s book your <br /> 3D virtual tour capture.
            </h1>
            <div className="pt-2">
              <p className="px-4 text-center text-xl font-semibold text-gray-800">
                Answer questions below
              </p>
              <p className="my-12 px-4 text-center text-xl font-semibold text-gray-800">
                - OR -
              </p>
              <a href="tel:6198000820"
                 className="-m-3 flex items-center justify-center rounded-md border border-gray-200 p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                <PhoneIcon className="mr-3 h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                <span>Book by phone</span>
              </a>
            </div>
            {/* Scroll down Icon */}
            <div
              className={`flex flex-col items-center justify-center font-semibold text-gray-800 animate-in fade-in duration-1000`}>
              <div className="mt-12">Get started</div>
              <DownArrow className={`mt-4`} />
            </div>
          </div>

          {/*SERVICE AREA*/}
          <ServiceAreaStep
            setQuoteData={setQuoteData}
            quoteData={quoteData}
          />

          {/*SQFT*/}
          {quoteData.region !== "none" ? (
            <SquareFootageStep
              setQuoteData={setQuoteData}
              quoteData={quoteData}
            />
          ) : (
            <></>
          )}

          {/*MATTERPORT*/}
          {quoteData.sqft.length >= 3 ? (
            <MatterportStep setQuoteData={setQuoteData} quoteData={quoteData} />
          ) : (
            <></>
          )}

          {/*HOSTING SECTION*/}
          {!!quoteData.tourType.length ? (
            <AddressStep setQuoteData={setQuoteData} quoteData={quoteData} />
          ) : (
            <></>
          )}

          {/*AVAILABILITY*/}
          {quoteData.stAddress && quoteData.city && quoteData.zipCode.length === 5 ? (
            <AvailabilityStep
              setSelectedTimes={setSelectedTimes}
              selectedTimes={selectedTimes}
            />
          ) : (
            <></>
          )}

          {/*RECAP*/}
          {quoteData.region &&
          quoteData.sqft &&
          quoteData.tourType &&
          quoteData.stAddress &&
          quoteData.city &&
          quoteData.zipCode.length === 5 ? (
            <GoogleReCaptchaProvider
              reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_KEY}
            >
              <RecapStep
                quoteData={quoteData}
                setQuoteData={setQuoteData}
                selectedTimes={selectedTimes}
              />
            </GoogleReCaptchaProvider>
          ) : (
            <></>
          )}

          {/*FAQ*/}
          <Faq />

          {/*MISSION*/}
          <LargeTestimonial />
        </div>
      </main>
    </>
  );
};

export default Index;
