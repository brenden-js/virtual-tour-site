import Image from "next/image";
import {cn, formatDate} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";

export function BlogPreview() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    }).slice(0, 3);
  return (
    <section
        id="blog"
        className="container space-y-6 bg-gray-100 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Recent posts
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our small company blog, where we share our insights and experiences with virtual tours.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
          <div></div>
          <Link
            href={'/blog'}
            className={cn(buttonVariants({variant: "outline", size: "lg"}), "mt-6 border border-gray-300")}
          >
            View all blog posts
          </Link>
        </div>
      </section>
  )
}
