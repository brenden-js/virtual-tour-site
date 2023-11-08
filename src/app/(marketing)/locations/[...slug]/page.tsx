import { notFound } from "next/navigation"
import { allLocations } from "contentlayer/generated"
import { Mdx } from "@/components/mdx-components"
import "@/styles/mdx.css"
import { Metadata } from "next"
import Link from "next/link"
import { env } from "@/env.mjs"
import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {PricingBlock} from "@/components/pricing-block";

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join("/")
  const post = allLocations.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allLocations.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

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
