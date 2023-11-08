import Link from "next/link"
import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button"
import Image from "next/image";
import {LargeTestimonial} from "@/components/create-quote/steps/largeTestimonial";
import AlternatingSections from "@/components/landing-pages/alternating-sections";
import CTA from "@/components/landing-pages/cta";
import tourScreenshot from "@/../public/images/tour-screenshot.png"
import {BlogPreview} from "@/components/landing-pages/blog-preview";
import {Logos} from "@/components/landing-pages/logos";

export default function IndexPage() {
  return (
    <>
      <section className="">
        <div className="md:[w-98vw] absolute -z-50 -mt-10 h-screen w-screen overflow-hidden rounded md:ml-2 lg:w-[97vw] xl:ml-3">
          <Image
            src={tourScreenshot}
            alt={'background image'}
            placeholder={'blur'}
            quality={100}
            fill
            priority={true}
            style={{
              objectFit: 'cover',
              overflow: 'hidden'
            }}
          />
        </div>
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 space-y-6 py-32 text-center">
          <Link
            href={'/about'}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          >
            Built by agents, for agents -{">"}
          </Link>
          <h1  className="font-heading text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Get 3D virtual tours <br /> for your listings.
          </h1>
          <p className="max-w-[42rem] leading-normal text-gray-200 sm:text-xl sm:leading-8">
            Move your listings faster, for more money, and with less work, with our Matterport tour capture and hosting
            service.
          </p>
          <div className="space-x-4">
            <Link href="/quote" className={cn(buttonVariants({size: "lg"})) + " shadow-2xl"}>
              Book Now
            </Link>
            <Link
              href="/learn"
              className={cn(buttonVariants({variant: "outline", size: "lg"})) + " text-white"}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <AlternatingSections />
      <BlogPreview />
      <div className="pt-24">
        <Logos />
      </div>
      <LargeTestimonial />
      <section className={"mx-auto mb-16 max-w-7xl"}>
        <CTA />
      </section>
    </>
  )
}
