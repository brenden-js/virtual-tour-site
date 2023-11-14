import { SectionHeading } from '@/components/learn/section-heading'


const upload = [
  {
    title: 'Professional Capture Techs',
    description:
      'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
  },
  {
    title: 'Industry Best Quality',
    description:
      'Provide buyers/renters a virtual tour with detailed visual quality, and smoothness.',
  },
  {
    title: '99.9% Measurement Accuracy',
    description:
      "Advanced 3D scanning captures your listing with accuracy down to the inch.",
  },
]

export function Capture() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-48"
    >
      <div className={'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'}>
        <SectionHeading number="2" id="screencasts-title">
          Capture
        </SectionHeading>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
          Get your property captured with an industry-standard Matterport Pro2 3D Camera.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          The Pro2 camera uses 12 3D sensors to create a buttery smooth tour for your listing, which provides the most accurate representation of your listing available.
        </p>
      </div>
      <div className='mx-auto mt-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {upload.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              {/*<div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">*/}
              {/*  <resource.image />*/}
              {/*</div>*/}
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
