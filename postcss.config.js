import postcssGlobalData from "@csstools/postcss-global-data";
import postcssCustomMedia from "postcss-custom-media";

// Make the @custom-media breakpoint definitions in src/styles/breakpoints.css
// visible to every CSS file, then resolve `@media (--md)` etc. at build time.
// Tailwind runs last so it sees fully-resolved media queries.
export default {
  plugins: [
    postcssGlobalData({
      files: ["src/styles/breakpoints.css"],
    }),
    postcssCustomMedia(),
    "@tailwindcss/postcss",
  ],
};
