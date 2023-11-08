import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative">
          <Image
            className="mx-auto"
            src="/images/cush.png"
            alt="logo"
            width={128}
            height={64}
          />
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
              <p>
               We know from experience that our clients are enthusiastic about how Matterport digital twins make listing and viewing properties much easier and more effective.
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src="/images/avatars/oliver.jpg"
                    alt="avatar"
                    height={40}
                    width={40}
                  />
                </div>
                <div className="mt-3 text-center md:ml-4 md:mt-0 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Oliver Skagerlind</div>

                  <svg className="mx-1 hidden h-5 w-5 text-gray-200 md:block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">Global Head of Client and Business Solutions, CUSHMAN & WAKEFIELD</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
