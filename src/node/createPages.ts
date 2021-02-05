import type { App } from "@vuepress/core"
import { createPage, PageOptions } from "@vuepress/core"

const pagesOptions: PageOptions[] = [
  {
    // TODO about page
    path: "/about.html",
    frontmatter: {
      layout: "About",
    },
  },
  {
    // TODO archives page
    path: "/archives.html",
    frontmatter: {
      layout: "Archives",
    },
  },
  {
    // TODO categories page
    path: "/categories.html",
    frontmatter: {
      layout: "Categories",
    },
  },
  {
    // TODO tags page
    path: "/tags.html",
    frontmatter: {
      layout: "Tags",
    },
  },
]

export const createPages = async (app: App) => {
  const pages = await Promise.all(
    pagesOptions
      .filter((a) => app.pages.every((b) => a.path !== b.path))
      .map((a) => ({
        ...a,
        frontmatter: { ...a.frontmatter, shadowPage: true },
      }))
      .map((option) => createPage(app, option))
  )

  app.pages.push(...pages)
}
