"use client"
import type {Dispatch, SetStateAction} from "react";
import type {QuoteData} from "@/app/(marketing)/quote/page";
import Image from "next/image";
import {DownArrow} from "@/components/icons/down-arrow";

export const AddressStep = ({setQuoteData, quoteData}: {
  setQuoteData: Dispatch<SetStateAction<QuoteData>>,
  quoteData: QuoteData
}) => {
  return (
    <div
      className="flex shrink-0 snap-center snap-always flex-col items-center justify-center py-44">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex flex-col md:block">
          <h2
            className="mb-1.5 text-center text-3xl font-semibold md:mb-0 md:inline-block md:text-left lg:text-3xl">Address.</h2>
          <p
            className="ml-2 text-center text-2xl font-semibold text-gray-600 md:inline-block md:text-left md:text-3xl">
            Where is your listing?
          </p>
        </div>
      </div>
      <div className="w-4/5 max-w-md">
        <input
          className="mb-4 w-full rounded-lg border border-gray-300 p-3 text-lg hover:border-gray-400"
          placeholder="Street Address"
          type="text"
          onChange={(e) => setQuoteData((prev) => {
            return {...prev, stAddress: e.target.value};
          })} />
        <input
          className="mb-4 w-full rounded-lg border border-gray-300 p-3 text-lg hover:border-gray-400"
          placeholder="City"
          type="text"
          onChange={(e) => setQuoteData((prev) => {
            return {...prev, city: e.target.value};
          })}
        />
        <input
          className="w-full rounded-lg border border-gray-300 p-3 text-lg hover:border-gray-400"
          placeholder="ZIP Code"
          type="number"
          onChange={(e) => setQuoteData((prev) => {
            return {...prev, zipCode: e.target.value};
          })} />
      </div>
      <div
        className={`flex flex-col items-center justify-center ${quoteData.stAddress && quoteData.city && quoteData.zipCode.length === 5 ? 'duration-400 animate-in fade-in delay-75' : 'invisible'}`}
      >
        <div
          className={`mt-12`}>Scroll
          down to continue
        </div>
                <DownArrow className={`mt-4 animate-bounce`} />
      </div>
    </div>
  )
}
