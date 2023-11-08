import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Logos} from "@/components/landing-pages/logos";

export default function PropertyManagerHero() {
  return (
    <div data-aos="fade-up" >
      <h2 className={"mx-auto max-w-4xl font-heading text-xl font-medium tracking-tight text-slate-900 sm:text-xl"}>
        For property managers
      </h2>
      <h1 className="mx-auto max-w-4xl font-heading text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Automate and scale{' '}
        your rental business.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Take on more rental listings without having to scale staff, while also reducing the risk of mismatching property condition stories at lease-end.
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
