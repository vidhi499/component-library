import { myTheme as theme } from "../../../theme";

export const StorybookIconArgs = {
  sizes: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: Object.keys(theme.components.Icon.sizes),
  },
};

export const IconArgs = {
  pages: {
    type: "variant",
    section: "sizes",
    row: "colorScheme",
    component: "states",
  },
  props: {
    sizes: {
      name: "size",
      type: {
        name: "string",
      },
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: Object.keys(theme.components.Icon.sizes).reverse(),
    },
    states: [
      {
        default: {
          name: "default",
        },
      },
    ],
  },
  metaData: {
    heading: "Icon",
    "sub-heading": "The Icon component.",
  },
};
