import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      grenn500: "#00875f",
      green300: "#00b37e",

      rocketseat: "#8257e6",
    },

    fontSize: {
      mod: "1.125rem",
      log: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
