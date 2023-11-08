import Link from 'next/link';


export const Hero = () => {
  return (
    <div className="bg-black">
      <div className="relative isolate overflow-hidden px-6 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
             aria-hidden="true">
          <div
            className="relative left-[calc(75%-11rem)] aspect-[1155/678] w-[56.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            styles="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
              className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Built by agents, for agents. <Link href="/about" className="font-semibold text-indigo-600"><span
              className="absolute inset-0" aria-hidden="true"></span>Read more <span
              aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Professional Service From Capture to Close.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Designed from the ground up to fit your real estate business like a glove.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-5 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            styles="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>
    </div>
  )
}
