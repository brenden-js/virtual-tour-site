import { SectionHeading } from '@/components/learn/section-heading'
import Image from 'next/image';


export function Pay() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:py-32"
    >
      <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
        <SectionHeading number="4" id="pricing-title">
          Pay
        </SectionHeading>
        <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Pay once your tour is live.
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Take a spin through your freshly created tour, and make sure we hit the nail on the head. Then pay using your preferred payment method with our secure payment processor partner, Stripe.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="md:rounded-6xl bg-slate-50 sm:px-6 sm:pb-16 md:px-8 md:pt-16 lg:p-20">
          <Image
            width={1030}
            height={660}
            src={'/images/stripe-screenshot.svg'}
            alt={'screenshot of stripe checkout'}
          />
        </div>
      </div>
    </section>
  )
}
