"use client"
import Image from "next/image";
import type {Dispatch, SetStateAction} from "react";
import type {QuoteData} from "@/app/(marketing)/quote/page";
import PlusIcon from "../../icons/plus";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import {DownArrow} from "@/components/icons/down-arrow";

export const ServiceAreaStep = ({
                                  setQuoteData,
                                  quoteData,
                                }: {
  setQuoteData: Dispatch<SetStateAction<QuoteData>>;
  quoteData: QuoteData;
}) => {
  return (
    <div
      className={
        "flex shrink-0 grow snap-center snap-always flex-col items-center justify-center bg-gray-50/50 py-44"
      }
    >
      <div className="flex flex-col">
        <div className="mb-8 flex flex-col items-center md:block">
          <h2 className="mb-1.5 text-center text-3xl font-semibold md:mb-0 md:inline-block md:text-left lg:text-3xl">
            Service Area.
          </h2>
          <p className="ml-2 text-center text-2xl font-semibold text-gray-600 md:inline-block md:text-left md:text-3xl">
            Where is your listing located?
          </p>
        </div>
      </div>
      {/*SERVICE AREA OPTIONS*/}
      <div className="flex w-4/5 flex-col lg:w-2/5">
        <div
          className={`mb-4 flex w-full cursor-pointer items-center justify-between rounded-lg border ${
            quoteData.region === "SWR"
              ? "border-blue-500 bg-blue-100/20 ring-1 ring-blue-500"
              : "border-gray-300 hover:border-gray-400"
          } p-4 py-8 text-sm font-medium shadow-sm`}
          onClick={() => {
            setQuoteData((prev) => {
              return {...prev, region: "SWR"};
            });
          }}
        >
          <div className="w-1/2">
            <p className="text-lg">Southwest Riverside</p>
          </div>
          <p className="w-1/2 text-right">
            Temecula, Menifee, Murrieta + more
          </p>
        </div>
        <div
          className={`mb-4 flex w-full cursor-pointer items-center justify-between rounded-lg border ${
            quoteData.region === "SOC"
              ? "border-blue-500 bg-blue-100/20 ring-1 ring-blue-500"
              : "border-gray-300 hover:border-gray-400"
          } p-4 py-8 text-sm font-medium shadow-sm  peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500`}
          onClick={() => {
            setQuoteData((prev) => {
              return {...prev, region: "SOC"};
            });
          }}
        >
          <div className="w-1/2">
            <p className="text-lg">South Orange County</p>
          </div>
          <p className="w-1/2 text-right">
            Irvine, Ladera Ranch, Mission Viejo + more
          </p>
        </div>
        <div
          className={`mb-4 flex w-full cursor-pointer items-center justify-between rounded-lg border ${
            quoteData.region === "NSD"
              ? "border-blue-500 bg-blue-100/20 ring-1 ring-blue-500"
              : "border-gray-300 hover:border-gray-400"
          } p-4 py-8 text-sm font-medium shadow-sm  peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500`}
          onClick={() => {
            setQuoteData((prev) => {
              return {...prev, region: "NSD"};
            });
          }}
        >
          <div className="w-1/2">
            <p className="text-lg">North San Diego</p>
          </div>
          <p className="w-1/2 text-right">
            Escondido, La Jolla, Vista + more
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild className={"p-4 py-8"}>
            <div
              className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-300 p-4 py-8 text-sm font-medium shadow-sm hover:border-gray-400">
              <p className="">See full list of covered areas</p>
              <PlusIcon />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>All covered areas</DialogTitle>
              <DialogDescription>
                Proudly serving the following areas:
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">Southwest Riverside</h5>
                <p className="col-span-3">Temecula, Murrieta, French Valley, Winchester, De Luz, Wildomar, Lake
                  Elsinore, Menifee</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">South Orange County</h5>
                <p className="col-span-3">Ladera Ranch, San Juan Capistrano, Rancho Santa Margarita, Irvine, Mission Viejo, Coto De Caza</p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <h5 className="text-right">North San Diego</h5>
                <p className="col-span-3">Fallbrook, Escondido, La Jolla, Valley Center, Oceanside, Carlsbad</p>
              </div>
            </div>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className={`flex flex-col items-center justify-center ${quoteData.region !== "none" ? 'duration-400 animate-in fade-in delay-75' : 'invisible'}`}
      >
        <div
          className={`mt-12`}
        >
          Scroll down to continue
        </div>
        <DownArrow className={`mt-4 animate-bounce`} />
      </div>
    </div>
  );
};
