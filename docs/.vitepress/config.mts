import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Project Noon",
  base: "/Noon-Docs/",
  ignoreDeadLinks: true,
  description: "Documentation",
  themeConfig: {
    logo: "assets/icons/logo-symbolic.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/plugins/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Screenshots", link: "/pages/screenshots" },
          { text: "Videos", link: "/pages/videos" },
          { text: "Installation", link: "/guide/installation" },
          { text: "Nvidia", link: "/guide/nvidia" },
          { text: "FAQ", link: "/guide/faq" },
        ],
      },
      {
        text: "Widgets",
        items: [
          { text: "Bar", link: "/widgets/bar" },
          { text: "Beam", link: "/widgets/beam" },
          { text: "Sidebar", link: "/widgets/sidebar" },
          { text: "Dialogs", link: "/widgets/dialogs" },
          { text: "Tips", link: "/guide/tips" },
          { text: "IPC", link: "/guide/ipc" },
        ],
      },
      {
        text: "Plugins",
        items: [
          { text: "Guidelines", link: "/plugins/guidelines" },
          { text: "Examples", link: "/plugins/examples" },
          { text: "Sidebar", link: "/plugins/sidebar" },
          { text: "Dock", link: "/plugins/dock" },
          { text: "Beam", link: "/plugins/beam" },
          { text: "Palettes", link: "/plugins/palettes" },
        ],
      },
      {
        text: "Other",
        items: [
          { text: "Credits", link: "/pages/credits" },
          { text: "License", link: "/pages/license" },
          { text: "Privacy Policy", link: "/pages/privacy" },
          { text: "Terms of Service", link: "/pages/tos" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/HyprNoon" }],
  },
});
