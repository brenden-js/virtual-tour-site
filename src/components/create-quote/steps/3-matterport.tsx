"use client"
import type {RegionData} from "@/types/quote-gen";
import dynamicQuoteGenerator, {allCachedRegionData} from "@/types/quote-gen";
import PlusIcon from "../../icons/plus";
import Image from "next/image";
import type {Dispatch, SetStateAction} from "react";
import type {QuoteData} from "@/app/(marketing)/quote/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {DownArrow} from "@/components/icons/down-arrow";

export const MatterportStep = ({setQuoteData, quoteData}: {
  setQuoteData: Dispatch<SetStateAction<QuoteData>>,
  quoteData: QuoteData
}) => {

  return (
    <div
      className="flex shrink-0 grow snap-center snap-always flex-col items-center justify-center bg-gray-50/50 py-44">
      <div className="flex flex-col">
        <div className="mb-8 flex flex-col md:block">
          <h2
            className="mb-1.5 text-center text-3xl font-semibold md:mb-0 md:inline-block md:text-left lg:text-3xl">Matterport
            Tour.</h2>
          <p
            className="ml-2 text-center text-2xl font-semibold text-gray-600 md:inline-block md:text-left md:text-3xl">
            Which package is best?
          </p>
        </div>
      </div>
      {/*MATTERPORT TYPE*/}
      <div className={'flex w-4/5 flex-col lg:w-2/5'}>
        <div
          className={`mb-4 flex cursor-pointer items-center justify-between rounded-lg border ${quoteData.matterportType === 'tour_only' ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-4 py-8 text-sm font-medium shadow-sm  peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500`}
          onClick={() => setQuoteData((prev) => {
            return {...prev, matterportType: 'tour_only'};
          })}
        >
          <div>
            <p className='text-lg'>3D Matterport Tour</p>
            <p className="">Captured with Matterport Pro2 3D Scanner</p>
          </div>
          <p
            className="ml-4">{dynamicQuoteGenerator(allCachedRegionData[quoteData.region]['tour_only' as keyof RegionData], parseInt(quoteData.sqft)).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}</p>
        </div>
        <div
          className={`col-span-2 mb-4 flex cursor-pointer items-center justify-between rounded-lg border lg:col-span-1 ${quoteData.matterportType === 'tour_and_floorplans' ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-4 py-8 text-sm font-medium shadow-sm  peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500`}
          onClick={() => setQuoteData((prev) => {
            return {...prev, matterportType: 'tour_and_floorplans'};
          })}
        >
          <div>
            <p className='text-lg'>3D Matterport Tour + Floorplans</p>
            <p className="">Captured with Matterport Pro2 3D Scanner</p>
          </div>
          <p
            className="ml-4">{dynamicQuoteGenerator(allCachedRegionData[quoteData.region]['tour_and_floorplans' as keyof RegionData], parseInt(quoteData.sqft)).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}</p>
        </div>
        {/*modal*/}
        <Dialog>
          <DialogTrigger asChild>
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-300 p-4 py-8 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
              <p className="">What&apos;s included?</p>
              <PlusIcon />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Everything included</DialogTitle>
              <DialogDescription>
                A complete full package built to make your life easier
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">Free hosting</h5>
                <p className="col-span-3">No monthly fees for hosting your tour, unlike other companies.</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">Floorplans at cost</h5>
                <p className="col-span-3">No additional mark up for full 99.9% accurate laser floor plans.</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">Full money back guarantee</h5>
                <p className="col-span-3">If you&apos;re unsatisified with the quality of your tour, contact your client
                  specialist for a refund.</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${quoteData.matterportType !== 'none'  ? 'duration-400 animate-in fade-in delay-75' : 'invisible'}`}
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
