import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Noon Plugins",
  base: 'Noon'
  description: "Noon Plugins Documentation",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/plugins/" },
    ],

    sidebar: [
      {
        text: "Guides",
        items: [
          { text: "Getting Started", link: "/guide/index" },
          { text: "Manifest", link: "/guide/manifest" },
          { text: "CLI", link: "/guide/cli" },
          { text: "IPC", link: "/guide/ipc" },
        ],
      },
      {
        text: "Integrations",
        items: [
          { text: "Sidebar", link: "/plugins/sidebar" },
          { text: "Dock", link: "/plugins/dock" },
          { text: "Beam", link: "/plugins/beam" },
          { text: "Palettes", link: "/plugins/palettes" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pharmaracist/noon" },
    ],
  },
});
