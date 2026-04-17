import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Project Noon",
  base: "/Noon-Docs/",
  description: "Documentation",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/plugins/" },
    ],

    sidebar: [
      {
        text: "Showcase",
        items: [
          { text: "Screenshots", link: "/pages/screenshots" },
          { text: "Videos", link: "/pages/videos" },
        ],
      },
      {
        text: "Usage",
        items: [
          { text: "Installation", link: "/guide/installation" },
          { text: "Tips", link: "/guide/tips" },
          { text: "IPC", link: "/guide/ipc" },
          { text: "FAQ", link: "/guide/faq" },
          { text: "Removal", link: "/guide/remove" },
        ],
      },
      {
        text: "Plugins",
        items: [
          { text: "Sidebar", link: "/plugins/sidebar" },
          { text: "Dock", link: "/plugins/dock" },
          { text: "Beam", link: "/plugins/beam" },
          { text: "Palettes", link: "/plugins/palettes" },
        ],
      },
      {
        text: "Create",
        items: [
          { text: "Guidelines", link: "/plugins/guidelines" },
          { text: "Manifest", link: "/plugins/manifest" },
        ],
      },
      {
        text: "TOS",
        items: [{ text: "License", link: "/pages/license" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pharmaracist/noon" },
    ],
  },
});
