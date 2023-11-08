import Image from "next/image";

export default function ManagerStats() {
  return (
    <div className="relative bg-white text-left">
      <div className="h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/images/avatars/agent-clients.jpg"
          alt="Support team"
          height={700}
          width={700}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-16">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Less in person walkthroughs, and more security.
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Not only does the 3D tour act as a first filter for non-suitable renters, it can act as a source of truth
            at move out date, when the condition of the property is assessed for damages; or reuse the same tour each time the property is up for a new lease.
          </p>
          <div className="mx-8 mt-12">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">Of renters would lease an apartment with a 3D virtual tour sight-unseen.</dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">70%</dd>
              </div>
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">More engagement from renters for property listings with a 3D virtual tour. </dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">3x</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
