"use client"
import type {Dispatch, SetStateAction} from "react";
import type {QuoteData} from "@/app/(marketing)/quote/page";
import PlusIcon from "../../icons/plus";
import Image from "next/image";
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

export const HostingStep = ({setQuoteData, quoteData}: {
  setQuoteData: Dispatch<SetStateAction<QuoteData>>,
  quoteData: QuoteData
}) => {
  return (
    <div
      className="flex shrink-0 snap-center snap-always flex-col items-center justify-center py-44">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex flex-col md:block">
          <h2
            className="mb-1.5 text-center text-3xl font-semibold md:mb-0 md:inline-block md:text-left lg:text-3xl">Hosting.</h2>
          <p
            className="ml-2 text-center text-2xl font-semibold text-muted-foreground md:inline-block md:text-left md:text-3xl">
            Our account, or yours?
          </p>
        </div>
      </div>
      {/*<div>*/}
      {/*  <Image*/}
      {/*    src={`/hosting/${hostingPic}.png`}*/}
      {/*    alt={"current pic"}*/}
      {/*    width={256}*/}
      {/*    height={512}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="w-4/5 lg:w-2/5">
        <div
          className={`mb-4 flex min-w-full cursor-pointer items-center justify-between rounded-lg border ${quoteData.hostingType === 'viewport_hosted' ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-4 py-8 text-sm font-medium shadow-sm`}
          onClick={() => setQuoteData((prev) => {
            return {...prev, hostingType: 'viewport_hosted'};
          })}
        >
          <div>
            <p className='text-lg'>Viewport Managed Hosting</p>
            <p className="text-left">Hosted in our account</p>
          </div>
          <p className="text">Free</p>
        </div>
        <div
          className={`mb-4 flex cursor-pointer items-center justify-between rounded-lg border ${quoteData.hostingType === 'self_hosted' ? 'border-blue-500 bg-blue-100/20 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'} p-4 py-8 text-sm font-medium shadow-sm `}
          onClick={() => setQuoteData((prev) => {
            return {...prev, hostingType: 'self_hosted'};
          })}
        >
          <div>
            <p className='text-lg'>Self-Managed Hosting (your account)</p>
            <p className="text-left">Requires Matterport.com subscription</p>
          </div>
          <p className="text-right">Free</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg border border-muted-foreground p-4 py-8 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            >
              <p className="text-left">Not sure which?</p>
              <PlusIcon />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Viewport managed vs Self Managed hosting</DialogTitle>
              <DialogDescription>
                See which is right for you
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">Viewport Managed</h5>
                <p className="col-span-3">We will upload and securely manage your Matterport tour in our matterport.com account.
                You will receive a link to the hosted tour, which can be shared by copying and pasting the link into an email or social media post.
                </p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">Self Managed</h5>
                <p className="col-span-3">
                  You will create credentials for us to log into your Matterport account, and upload your tour there.
                  Note that you will need a premium Matterport membership capable of uploading tours taken with a Pro2 Matterport camera.
                  See matterport.com for details.
                </p>
              </div>
            </div>
            <DialogFooter>

            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${quoteData.hostingType !== 'none'  ? 'duration-400 animate-in fade-in delay-75' : 'invisible'}`}
      >
      <div className={`mt-12`}>Scroll down to
        continue
      </div>
              <DownArrow className={`mt-4 animate-bounce`} />
      </div>
    </div>
  )
}
