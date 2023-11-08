import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="relative text-left text-black">
      <div className="h-56 opacity-20 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 md:opacity-100">
        <Image
          className="h-full w-full object-cover"
          src="/images/avatars/laptop.jpg"
          alt="person booking on laptop"
          fill
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-800">Get started with 3D virtual tours</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Book now</p>
          <p className="mt-3 text-lg text-gray-700">
            Get a quote now instantly with our self-service booking tool, or give us a call.
          </p>
          <div className="mt-8">
            <div className="inline-flex">
              <Link href="/quote" className={cn(buttonVariants({size: "lg",}))}>
                Book Now
              </Link>
              <Link
                href="/learn"
                className={cn(buttonVariants({variant: "outlineOnLight", size: "lg"})) + " ml-2 border border-grey-900"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
