import Image from "next/image";
import {cn, formatDate} from "@/lib/utils";
import Link from "next/link";
import {Post} from "contentlayer/generated";
import {buttonVariants} from "@/components/ui/button";

export const RelatedBlogs = ({ posts }: {posts: Post[]}) => {
  return (
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
              <Link href={post.slug} className={cn(buttonVariants({variant: "outline", size: "lg"}))}>
                <span>View Article</span>
              </Link>
            </article>
          ))}
        </div>
  )
}
