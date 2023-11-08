import Image from 'next/image'

export default function BuyersStats() {
  return (
    <div className="relative bg-white text-left">
      <div className="h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/images/avatars/agent.jpg"
          alt="Agent"
          height={700}
          width={700}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-16">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bring the home tour right to your clients wherever they are.
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Provide your clients the power to virtually explore, measure, and experience any listing they want,
            without having to do extensive in person showings.
          </p>
          <div className="mx-8 mt-12">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">Of buyers would of potential buyers said they would buy a property sight-unseen if there was a 3D tour available online. </dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">55%</dd>
              </div>
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">Of buyers/sellers would switch to a real estate agent offering immersive 3D tours of listed properties. </dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">80%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
