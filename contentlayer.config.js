import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const About = defineDocumentType(() => ({
    name: "About",
    filePathPattern: `about/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      image: {
        type: "string",
      },
      date: {
        type: "string"
      }
    },
    computedFields,
  })
)


export const Location = defineDocumentType(() => ({
    name: "Location",
    filePathPattern: `locations/**/*.mdx`,
    contentType: "mdx",
    fields: {
      region: {
        type: "string",
        required: true,
      },
      county: {
        type: "string",
        required: true,
      },
      city: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
      },
      published: {
        type: "boolean",
        default: true,
      },
    },
    computedFields,
  })
)

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    avatar: {
      type: "string",
      required: true
    }
  },
  computedFields,
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Page, Post, Location, About],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
