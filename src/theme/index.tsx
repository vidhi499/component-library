import { extendTheme } from "native-base";

export const myTheme = extendTheme({
  colors: {
    newColor: {
      "50": "#2878ff",
      "100": "#2570ff",
      "200": "#2368f3",
      "300": "#2060e0",
      "400": "#1d58cd",
      "500": "#1b50bb",
      "600": "#1848a8",
      "700": "#153e91",
      "800": "#11347b",
      "900": "#0e2b64",
    },
    primary: {
      "50": "#2878ff",
      "100": "#2570ff",
      "200": "#2368f3",
      "300": "#2060e0",
      "400": "#1d58cd",
      "500": "#1b50bb",
      "600": "#1848a8",
      "700": "#153e91",
      "800": "#11347b",
      "900": "#0e2b64",
    },
  },
  components: {
    Button: {
      variants: {
        solid: ({ colorScheme }: any) => {
          return {
            bg: `pink.500`,
            rounded: "full",
          };
        },
        rounded: ({ colorScheme }: any) => {
          return {
            bg: `pink.500`,
            rounded: "full",
            opacity: "0.5",
          };
        },
      },
    },
    Checkbox: {
      sizes: {
        xl: { boxSize: "20" },
      },
    },
  },
});
