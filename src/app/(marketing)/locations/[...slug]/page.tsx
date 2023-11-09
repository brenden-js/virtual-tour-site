import { notFound } from "next/navigation"
import { allLocations } from "contentlayer/generated"
import { Mdx } from "@/components/mdx-components"
import "@/styles/mdx.css"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {PricingBlock} from "@/components/pricing-block";

interface PostPageProps {
  params: {
    slug: string[]
  }
}

function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/")
  const post = allLocations.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export function generateStaticParams():
  PostPageProps["params"][]
 {
  return allLocations.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default  function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const price = post.county === "Riverside" ? "$199" : "$275"

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/locations"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all locations
      </Link>
      <div>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/locations" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all locations
        </Link>
      </div>
      <PricingBlock type={"pricing"} price={price} showLearnMoreButton={true} />
    </article>
  )
}
