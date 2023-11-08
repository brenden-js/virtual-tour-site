import {Mdx} from "@/components/mdx-components";
import aboutMdx from "@/../.contentlayer/generated/About/about__about.mdx.json";

const Page = () => {
  const data = aboutMdx
  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {data.title}
        </h1>
        {data.description && (
          <p className="text-xl text-muted-foreground">{data.description}</p>
        )}
      </div>
      <hr className="my-4" />
      <Mdx code={data.body.code} />
    </article>
  )
}

export default Page;
