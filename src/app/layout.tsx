import {Inter as FontSans} from "next/font/google"
import localFont from "next/font/local"
import "@/styles/globals.css"
import {siteConfig} from "@/config/site"
import {cn} from "@/lib/utils"
import {Analytics} from "@/components/analytics"
import {AOSInit} from "@/components/aos";
import {Toaster} from "react-hot-toast";
import {TRPCReactProvider} from "@/trpc/react";
import {cookies} from "next/headers";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}


export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
    <body
      className={cn(
        "bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}
    >
    <TRPCReactProvider cookies={cookies().toString()}>
      <Analytics />
      <Toaster />
      <AOSInit />
      {children}
    </TRPCReactProvider>
    </body>
    </html>
  )
}
