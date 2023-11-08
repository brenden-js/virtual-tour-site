// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var About = defineDocumentType(
  () => ({
    name: "About",
    filePathPattern: `about/**/*.mdx`,
    contentType: "mdx",
    fields: {
      title: {
        type: "string",
        required: true
      },
      description: {
        type: "string"
      },
      image: {
        type: "string"
      },
      date: {
        type: "string"
      }
    },
    computedFields
  })
);
var Location = defineDocumentType(
  () => ({
    name: "Location",
    filePathPattern: `locations/**/*.mdx`,
    contentType: "mdx",
    fields: {
      region: {
        type: "string",
        required: true
      },
      county: {
        type: "string",
        required: true
      },
      city: {
        type: "string",
        required: true
      },
      title: {
        type: "string",
        required: true
      },
      description: {
        type: "string"
      },
      published: {
        type: "boolean",
        default: true
      }
    },
    computedFields
  })
);
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    image: {
      type: "string",
      required: true
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true
    },
    avatar: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
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
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  About,
  Location,
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KZ67HF6H.mjs.map
