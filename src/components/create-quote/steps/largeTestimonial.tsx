import Image from "next/image";

export const LargeTestimonial = () => {
  return (
    <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Helping you amplify your listings.
          </h2>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-300 px-8 py-4">
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Matterport …has brought my
              marketing to an entirely new
              level. I often get an “Oh WOW”
              or “That is amazing” when
              I show sellers an example
              during the listing presentation
              at a home. The Matterport 3D
              Showcase separates me from
              all the real estate agents in the
              area that don’t offer Matterport
              and when I’m up against some
              of the few agents that do, I
              know I have nothing to worry
              about. Incredible technology
              and worth every penny!!

            </p>
            <p className="mt-4 font-heading font-bold text-muted-foreground">
              Paul Morrison
              <br />
              Agent at RE/MAX
            </p>
          </div>
        </div>
      </section>
  )
}
