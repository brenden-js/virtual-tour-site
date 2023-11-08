import Image from 'next/image'
import { Container } from '@/components/learn/container'
import { SectionHeading } from '@/components/learn/section-heading'
import figmaImage from '@/components/learn/resources/figma.svg';
import abstractBackgroundImage from '@/components/learn/resources/abstract-background.png';
import videoPlayerImage from '@/components/learn/resources/video-player.svg';
import discordImage from '@/components/learn/resources/discord.svg';


const upload = [
  {
    title: 'Professional Capture Techs',
    description:
      'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Industry Best Quality',
    description:
      'Provide buyers/renters a virtual tour with detailed visual quality, and smoothness.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: '99.9% Measurement Accuracy',
    description:
      "Advanced 3D scanning captures your listing with accuracy down to the inch.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Capture() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-48"
    >
      <Container className={""}>
        <SectionHeading number="2" id="screencasts-title" className={""}>
          Capture
        </SectionHeading>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
          Get your property captured with an industry-standard Matterport Pro2 3D Camera.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          The Pro2 camera uses 12 3D sensors to create a buttery smooth tour for your listing, which provides the most accurate representation of your listing available.
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
