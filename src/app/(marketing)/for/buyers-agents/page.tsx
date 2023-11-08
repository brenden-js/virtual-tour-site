import BuyersAgentsHero from "@/components/landing-pages/buyers-agents/hero";
import BuyersStats from "@/components/landing-pages/buyers-agents/stats";
import Testimonial from "@/components/landing-pages/testimonial";
import CTA from "@/components/landing-pages/cta";
import {RelatedBlogs} from "@/components/landing-pages/related-blogs";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";

export default function ListingAgents() {
  const posts = allPosts
    .filter((post) => post.avatar === "buyers-agents")
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    }).slice(0, 3);
  return (
    <div
      className={'mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32'}
    >
      <BuyersAgentsHero />
      <div className="py-24">
      <BuyersStats />
      </div>
      <div className="">
        <Testimonial />
      </div>
      <div className="py-32">
        <div className="mx-auto my-6  flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Upgrade your service package.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here&apos;s our latest posts for buyers agents.
          </p>
        </div>
        <RelatedBlogs posts={posts} />
      </div>
      <div>
        <CTA />
      </div>
    </div>
  )
}
