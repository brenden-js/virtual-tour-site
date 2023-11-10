import { SectionHeading } from '@/components/learn/section-heading'


const upload = [
  {
    title: 'Instant Self-Service Pricing',
    description:
      'See exactly how much your tour will cost up front, for listings across Southern California.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'We break down every quote down to the square foot, so you know exactly what to expect.',
  },
  {
    title: 'One Fee',
    description:
      "Absolutely everything to get your tour live and ready for viewing is included in your quote.",
  },
]

export function Book() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-48"
    >
      <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
        <SectionHeading number="1" id="pricing-title">
          Book
        </SectionHeading>
        <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Book your 3D Virtual Tour Capture
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Get an instant quote and request available dates from anywhere, without the need for lengthy back and forths.
        </p>
      </div>
      <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {upload.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
