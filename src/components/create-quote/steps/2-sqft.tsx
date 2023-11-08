"use client"
import {Dispatch, SetStateAction} from "react";
import {QuoteData} from "@/app/(marketing)/quote/page";
import Image from "next/image";
import {DownArrow} from "@/components/icons/down-arrow";

export const SquareFootageStep = ({setQuoteData, quoteData}: {
  setQuoteData: Dispatch<SetStateAction<QuoteData>>,
  quoteData: QuoteData
}) => {
  return (
    <div
      className="flex shrink-0 grow snap-center snap-always flex-col items-center justify-center py-44">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex flex-col md:block">
          <h2
            className="mb-1.5 text-center text-3xl font-semibold md:mb-0 md:inline-block md:text-left lg:text-3xl">
            Square footage.
          </h2>
          <p
            className="ml-2 text-center text-2xl font-semibold text-gray-600 md:inline-block md:text-left md:text-3xl">
            How big is the interior?
          </p>
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center py-3">
        <div className="flex"><input
          className="w-full rounded-lg border border-gray-300 p-3 text-center text-xl hover:border-gray-400"
          placeholder="Square footage"
          type="number"
          value={quoteData.sqft}
          onChange={(e) => setQuoteData((prev) => {
            return {...prev, sqft: e.target.value};
          })} /></div>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${quoteData.sqft.length >= 3 ? 'duration-400 animate-in fade-in delay-75' : 'invisible'}`}
      >
        <div className={`mt-12`}>
          Scroll down to continue
        </div>
                <DownArrow className={`mt-4 animate-bounce`} />
      </div>
    </div>
  )
}
