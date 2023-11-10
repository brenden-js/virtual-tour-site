import Link from "next/link"
import {allLocations} from "contentlayer/generated"

export const metadata = {
  title: "Our Service Locations in Southern California",
}


export default function LocationPage() {
  const rsLocations = allLocations.filter((location) => location.county === "Riverside")
  const sdLocations = allLocations.filter((location) => location.county === "San Diego")
  const ocLocations = allLocations.filter((location) => location.county === "Orange County")

  return (
    <div className="container min-h-screen max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Service areas
          </h1>
          <p className="text-xl text-muted-foreground">
            Proudly serving the following areas:
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <h2 className="mb-3 font-heading text-2xl">Riverside County</h2>
      {rsLocations.length ? (
        <div className="mb-12 grid grid-cols-2 gap-3">
          {rsLocations.map((post) => (
            <Link key={post.slug} href={post.slug} className="px-2 py-3 hover:bg-gray-100">
              <article
                key={post._id}
                className=""
              >
                <h3 className=" font-extrabold">{post.city}</h3>
                <span className="sr-only">View Article</span>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mb-12 ">Not yet available.</p>
      )}
      <h2 className="mb-3 font-heading text-2xl">San Diego County</h2>
      {sdLocations.length ? (
        <div className="mb-12 grid grid-cols-2 gap-3">
          {sdLocations.map((post) => (
            <Link key={post.slug} href={post.slug} className="px-2 py-3 hover:bg-gray-100">
              <article
                key={post._id}
                className=""
              >
                <h3 className=" font-extrabold">{post.city}</h3>
                <span className="sr-only">View Article</span>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mb-6">Not yet available.</p>
      )}
      <h2 className="mb-3 font-heading text-2xl">Orange County</h2>
      {ocLocations.length ? (
        <div className="grid grid-cols-2 gap-3">
          {ocLocations.map((post) => (
            <Link key={post.slug} href={post.slug} className="px-2 py-3 hover:bg-gray-100">
              <article
                key={post._id}
                className=""
              >
                <h3 className=" font-extrabold">{post.city}</h3>
                <span className="sr-only">View Article</span>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mb-6">Not yet available.</p>
      )}
    </div>
  )
}
