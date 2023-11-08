import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Logos} from "@/components/landing-pages/logos";

export default function BuyersAgentsHero() {
  return (
    <div data-aos="fade-up" >
      <h2 className={"mx-auto max-w-4xl font-heading text-xl font-medium tracking-tight text-slate-900 sm:text-xl"}>
        For Buyers&apos; Agents
      </h2>
      <h1 className="mx-auto max-w-4xl font-heading text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Provide unique value to long-distance and out-of-state buyers.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Provide your clients with an unmatched 24/7 open house experience to properties they&apos;re interested in.
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
