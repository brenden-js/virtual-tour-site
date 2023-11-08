import { Container } from '@/components/learn/container'
import { SectionHeading } from '@/components/learn/section-heading'
import Image from 'next/image';
import figmaImage from '@/components/learn/resources/figma.svg';
import abstractBackgroundImage from '@/components/learn/resources/abstract-background.png';
import videoPlayerImage from '@/components/learn/resources/video-player.svg';


const upload = [
  {
    title: 'Instant Self-Service Pricing',
    description:
      'See exactly how much your tour will cost up front, for listings across Southern California.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Transparent Pricing',
    description:
      'We break down every quote down to the square foot, so you know exactly what to expect.',
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
    title: 'One Fee',
    description:
      "Absolutely everything to get your tour live and ready for viewing is included in your quote.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image
            src={'/images/avatars/agent-quote.png'}
            alt=""
            width={500}
            height={500}
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )
    },
  },
]

export function Book() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-48"
    >
      <Container className="">
        <SectionHeading className="" number="1" id="pricing-title">
          Book
        </SectionHeading>
        <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Book your 3D Virtual Tour Capture
        </p>
        <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
          Get an instant quote and request available dates from anywhere, without the need for lengthy back and forths.
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
