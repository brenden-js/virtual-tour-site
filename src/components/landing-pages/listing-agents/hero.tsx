import {Button} from "@/components/ui/button";
import Link from "next/link";
import { Logos } from "../logos";

export default function ListingAgentHero() {
  return (
    <div data-aos="fade-up" >
      <h2 className={"mx-auto max-w-4xl font-heading text-xl font-medium tracking-tight text-slate-900 sm:text-xl"}>For listing agents</h2>
      <h1 className="mx-auto max-w-4xl font-heading text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Supercharge{' '}
          your listing business.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Take on more listings, sell them faster, and sell them easier.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link
          href={'/quote'}
        >
          <Button variant="default">Book Now</Button>
        </Link>
      </div>
      <div className="pt-24">
        <Logos />
      </div>
    </div>
  )
}
