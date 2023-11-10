import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"
import { MdxCard } from "@/components/mdx-card"

const components = {
  h1: ({ className,  }: {className?: string | undefined}) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}

    />
  ),
  h2: ({ className,  }: {className?: string | undefined}) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}

    />
  ),
  h3: ({ className,  }: {className?: string | undefined}) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}

    />
  ),
  h4: ({ className,  }: {className?: string | undefined}) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}

    />
  ),
  h5: ({ className,  }: {className?: string | undefined}) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}

    />
  ),
  h6: ({ className,  }: {className?: string | undefined}) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}

    />
  ),
  a: ({ className,  }: {className?: string | undefined}) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}

    />
  ),
  p: ({ className,  }: {className?: string | undefined}) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}

    />
  ),
  ul: ({ className,  }: {className?: string | undefined}) => (
    <ul className={cn("my-6 ml-6 list-disc", className)}  />
  ),
  ol: ({ className, }: {className?: string | undefined}) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)}  />
  ),
  li: ({ className,  }: {className?: string | undefined}) => (
    <li className={cn("mt-2", className)}  />
  ),
  blockquote: ({ className, }: {className?: string | undefined}) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}

    />
  ),
  hr: ({  }) => <hr className="my-4 md:my-8"  />,
  table: ({ className,  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)}  />
    </div>
  ),
  tr: ({ className,  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}

    />
  ),
  th: ({ className, }: {className?: string | undefined}) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}

    />
  ),
  td: ({ className, }: {className?: string | undefined}) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}

    />
  ),
  pre: ({ className }: {className?: string | undefined}) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}

    />
  ),
  code: ({ className, }: {className?: string | undefined}) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
    />
  ),
  Image,
  Card: MdxCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)


  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
