import Image from 'next/image'
import { SectionHeading } from '@/components/learn/section-heading'
import authorImage from 'public/images/avatars/agent.jpg'
import { GridPattern } from '@/components/learn/grid-pattern';
import { PricingBlock } from '@/components/pricing-block';


export function Host() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-48"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl bg-slate-50 pt-px">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading className="" number="5" id="author-title">
              Host
            </SectionHeading>
            <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Hosted til it sells</span> (or rents).
            </p>
            <p className="my-4 text-lg tracking-tight text-slate-700">
              As a fast moving agent, the last thing you need to worry about is having to remember to cancel hosting
              subscriptions for your virtual tours. That is why we include unlimited hosting in our one upfront price.
              So you can focus on closing deals, and not on managing subscriptions.
            </p>
            <div className={"mt-16 bg-white"}>
               <PricingBlock type={'pricing'} price={'$199'} showLearnMoreButton={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
