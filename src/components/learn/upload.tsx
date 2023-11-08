import Image from 'next/image'
import { Container } from '@/components/learn/container'
import { SectionHeading } from '@/components/learn/section-heading'
import discordImage from '@/components/learn/resources/discord.svg'
import figmaImage from '@/components/learn/resources/figma.svg'

const upload = [
  {
    title: 'Quality Check',
    description:
      'We make sure all rooms and areas are captured. Ensure there are no errors in captures.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Upload Same Day',
    description:
      "Your tour is then uploaded same day to Matterport, where your capture is further upscaled / refined.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Available To View Next Day',
    description:
      "After approximately 6 hours of processing, your tour will be made public and ready to view.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  }
]

export function Upload() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-48"
    >
      <Container className="">
        <SectionHeading number="3" id="resources-title" className="">
          Upload
        </SectionHeading>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
          After capture, we upload the tour and add the finishing touches.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Making sure we hit our standards, and adding touch ups to make a professional quality, 3D virtual tour of the home.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
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
      </Container>
    </section>
  )
}
