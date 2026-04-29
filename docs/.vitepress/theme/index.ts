import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { VPTeamMembers } from "vitepress/theme";
import M3Placeholder from "./components/M3Placeholder.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";
import "./main.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(Footer),
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Carousel", Carousel);
    app.component("M3Placeholder", M3Placeholder);
    app.component("VPTeamMembers", VPTeamMembers);
    app.component("Footer", Footer);
  },
} satisfies Theme;
