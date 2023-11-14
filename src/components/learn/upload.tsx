import { SectionHeading } from '@/components/learn/section-heading'


const upload = [
  {
    title: 'Quality Check',
    description:
      'We make sure all rooms and areas are captured. Ensure there are no errors in captures.',

  },
  {
    title: 'Upload Same Day',
    description:
      "Your tour is then uploaded same day to Matterport, where your capture is further upscaled / refined.",
  },
  {
    title: 'Available To View Next Day',
    description:
      "After approximately 6 hours of processing, your tour will be made public and ready to view.",
  }
]

export function Upload() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-48"
    >
      <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
        <SectionHeading number="3" id="resources-title">
          Upload
        </SectionHeading>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
          After capture, we upload the tour and add the finishing touches.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Making sure we hit our standards, and adding touch ups to make a professional quality, 3D virtual tour of the home.
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
