import Image from "next/image";

export default function ListingStats() {
  return (
    <div className="relative bg-white text-left">
      <div className="h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/images/avatars/agent-on-phone.jpg"
          alt="Support team"
          height={700}
          width={700}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-16">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sell faster, and sell for more money.
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Get more referrals, higher commission, and faster closing by adding a 3D virtual tour.
          </p>
          <div className="mx-8 mt-12">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">Of sellers agree that a 3D virtual tour would give their listing a competitive edge.</dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">99.4%</dd>
              </div>
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">Of buyers and sellers would switch to an agent offering 3D tours. </dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">86%</dd>
              </div>
              <div className="mt-8 flex w-full flex-col border-l-2 border-gray-200 pl-6">
                <dt className="order-2 text-base font-medium text-gray-500">Higher sales price for listings with a 3D virtual tour, vs those without. </dt>
                <dd className="order-1 text-2xl font-bold text-gray-700 sm:text-3xl sm:tracking-tight">up to 9%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
