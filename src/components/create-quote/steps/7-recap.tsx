"use-client"
import toast from "react-hot-toast";
import {useEffect} from "react";
import {cn} from "@/lib/utils";
import type {RegionData} from "@/types/quote-gen";
import dynamicQuoteGenerator, {
  allCachedRegionData,
} from "@/types/quote-gen";
import dayjs from "dayjs";
import {useRouter} from 'next/navigation';
import type {Dispatch, SetStateAction} from "react";
import type {QuoteData} from "@/app/(marketing)/quote/page";
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import {buttonVariants} from "@/components/ui/button";
import {api} from "@/trpc/react";

const RecapStep = ({
                     setQuoteData,
                     quoteData,
                     selectedTimes,
                   }: {
  setQuoteData: Dispatch<SetStateAction<QuoteData>>;
  quoteData: QuoteData;
  selectedTimes: Array<string>;
}) => {
  console.log('QUOTEDATA', quoteData);
    const router = useRouter();
  const {executeRecaptcha} = useGoogleReCaptcha();

  const createQuote = api.quote.createQuote.useMutation()
  console.log('Create quoter', createQuote)
  useEffect(() => {
    if (createQuote.isError) {
      toast.error('Error creating quote')
    } else if (createQuote.isSuccess) {
      const id = createQuote.data
      router.replace(`/quote/${id}`)
    }
  }, [createQuote.data, createQuote.isError, createQuote.isSuccess, router])

  const onSubmit = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return toast.error('Recaptcha failed, try again later.')
    }
    const token = await executeRecaptcha('yourAction');
    if (token) {
      const result = await createQuote.mutateAsync({
        ...quoteData,
        sqft: parseInt(quoteData.sqft),
        requestedTimes: selectedTimes.join(',')
      });
      console.log("Result:::", result)
    } else {
      console.log('Execute recaptcha failed');
      return toast.error('Recaptcha failed, try again later.')
    }
  }

  return (
    <div
      className="flex shrink-0 snap-center snap-always flex-col items-center justify-center py-44 md:flex-row">
      <div className="flex flex-col p-8 md:w-1/3">
        <h3
          className="mb-2 inline-block text-center text-2xl font-semibold md:text-left lg:text-4xl">{`${quoteData.stAddress}, ${quoteData.city}.`}</h3>
        <p className="inline-block text-center text-2xl font-semibold text-muted-foreground md:text-left lg:text-4xl">
          Your Matterport tour awaits.
        </p>
      </div>
      <div className="flex flex-col text-center md:w-1/3 md:text-left">
        <div className="flex flex-col">
          <h5 className="text-lg">Matterport Tour with floor plans</h5>
          <p className="text-lg font-semibold">
            {dynamicQuoteGenerator(
              allCachedRegionData[quoteData.region][
                quoteData.tourType as keyof RegionData
                ],
              parseInt(quoteData.sqft)
            ).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <h6 className=" mt-8 inline-block">Selected availability:</h6>
          {selectedTimes.length > 0 ? (
            <div className={"mt-1 text-sm font-semibold text-muted-foreground"}>
              {selectedTimes.map((time) => {
                return (
                  <div
                    key={time}
                    className={
                      "m-1 inline-block rounded-3xl border border-gray-500 p-2"
                    }
                  >
                    {dayjs(new Date(time)).format("ddd MM/DD h[:]mmA")}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={"mt-1 text-sm font-semibold text-muted-foreground"}>
              <div
                className={
                  "m-1 inline-block rounded-3xl border border-gray-500 p-2"
                }
              >
                No times selected
              </div>
            </div>
          )}
          <h6 className="mt-2 inline-block text-lg font-semibold md:mt-8 lg:text-xl">
            Book now, pay later
          </h6>
        </div>
      </div>
      <div className="flex w-11/12 flex-col space-y-4 p-8 md:w-1/3">
        <div>
          <label htmlFor="name" className="font-heading">Your Name</label>
          <input
            name="name"
            className="w-full rounded-lg border border-muted-foreground p-3 text-lg hover:border-gray-400"
            placeholder="Name"
            type="text"
            onChange={(e) =>
              setQuoteData((prev) => {
                return {...prev, name: e.target.value};
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email" className="font-heading">Your Email</label>
          <input
            name="email"
            className="w-full rounded-lg border border-muted-foreground p-3 text-lg hover:border-gray-400"
            placeholder="Email address"
            type="email"
            onChange={(e) =>
              setQuoteData((prev) => {
                return {...prev, email: e.target.value};
              })
            }
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-heading">Your Phone</label>
          <input
            name="phone"
            className="w-full rounded-lg border border-muted-foreground p-3 text-lg hover:border-gray-400"
            placeholder="Phone Number"
            type="tel"
            id="phone"
            onChange={(e) =>
              setQuoteData((prev) => {
                return {...prev, phone: e.target.value};
              })
            }
          />
        </div>
        <button
          className={cn(buttonVariants())}
          onClick={() => {
            void onSubmit()
          }}
          disabled={createQuote.isLoading}
        >
          Request Booking Now
        </button>
      </div>
    </div>
  );
};

export default RecapStep;
