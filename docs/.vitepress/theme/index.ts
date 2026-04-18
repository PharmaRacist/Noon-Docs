// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import M3Placeholder from "./components/M3Placeholder.vue";
import Carousel from "./components/Carousel.vue";
import "./main.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Carousel", Carousel);
    app.component("M3Placeholder", M3Placeholder);
  },
} satisfies Theme;
