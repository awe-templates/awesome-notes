import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Awesome Notes",
  description: "Awesome Notes to Create Awesome Templates",

  // GitHub Pages base path - set to repo name for project pages
  base: process.env.NODE_ENV === "production" ? "/awesome-notes/" : "/",

  head: [["link", { rel: "icon", href: "https://fav.farm/📚" }]],

  themeConfig: {
    logo: "https://fav.farm/📚",

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/pages/serve" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "🏠 Home", link: "/" },
          { text: "🕹️ Serve", link: "/pages/serve" },
          { text: "🔄 Update", link: "/pages/update" },
        ],
      },
      {
        text: "Development",
        items: [
          { text: "🧰 Tools", link: "/pages/tools" },
          { text: "💻 VS Code", link: "/pages/vs-code" },
          { text: "➕ Extensions", link: "/pages/extensions" },
          { text: "🧬 Libraries", link: "/pages/libraries" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "📁 Folder Structure", link: "/pages/folder-structure" },
          { text: "🔢 Ports", link: "/pages/ports" },
          { text: "🤖 Act", link: "/pages/act" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/awe-templates/awesome-notes",
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 Awesome Templates",
    },

    editLink: {
      pattern:
        "https://github.com/awe-templates/awesome-notes/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },
});
