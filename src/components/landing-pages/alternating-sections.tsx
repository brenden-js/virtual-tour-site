import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

const features = [
  {
    name: 'For Listing Agents',
    description:
      'Supercharge your listing business. Take on more listings, sell them faster, and sell them with less work, when you market with a 3D virtual tour.',
    imageSrc: '/images/avatars/agent-bg-removed.png',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    link: '/for/listing-agents'
  },
  {
    name: 'For Property Managers',
    description:
      'Automate and scale your rental business.\n' +
      'Take on more rental listings without having to scale staff, , while also reducing the risk of mismatching property condition stories at lease-end.',
    imageSrc: '/images/avatars/agent-on-phone-bg-removed.png',
    imageAlt: 'Agent on the phone.',
    link: '/for/property-managers'
  },
  {
    name: 'For For-Sale-By-Owners',
    description:
      'Attract buyers and reduce intrusive in-person showings.\n' +
      'Increase the attraction to your house with professional grade marketing, and automate showings with non-suitable buyers.',
    imageSrc: '/images/avatars/fsbo-sold-bg-removed.png',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    link: '/for/fsbo'
  },
  {
    name: "For Buyers' Agents",
    description:
      'Bring massive value to international and out-of-state buyers. Provide your clients with an unmatched 24/7 open house experience to properties they\'re interested in.',
    imageSrc: '/images/avatars/agent-with-clients-bg-removed.png',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    link: '/for/buyers-agents'
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AlternatingSections() {
  return (
    <div className="mx-auto max-w-5xl rounded bg-white">
      <div className="mx-auto max-w-4xl px-8 py-12 pb-24 sm:px-6 lg:max-w-7xl lg:px-12">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upgrade your real estate business.</h2>
          <p className="mt-4 text-gray-500">
            See how virtual tours can make your real estate business more effective.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="font-heading text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="my-2 text-sm text-gray-500">{feature.description}</p>
                <Link href={feature.link} className={cn(buttonVariants({variant: "outline", size: "lg"}))}>See use case</Link>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-cover object-center"
                    fill={true}
                    style={{
                      objectFit: "contain"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
