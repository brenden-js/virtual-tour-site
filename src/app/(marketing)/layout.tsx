import { MainNav } from "@/components/main-nav"
import SiteFooter from "@/components/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="">
      <header className="z-40 bg-black">
          <MainNav />
      </header>
      <main className="">{children}</main>
      <SiteFooter />
    </div>
  )
}
