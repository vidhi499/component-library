import { myTheme as theme } from "../../../theme";

export const StorybookHeadingArgs = {
  children: {
    name: "children",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "This is a Heading",
    control: {
      type: "text",
    },
  },
  size: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "lg",
    control: {
      type: "select",
    },
    options: Object.keys(theme.components.Heading.sizes),
  },
};

export const HeadingArgs = {
  pages: {
    type: "",
    section: "component",
    row: "fontSize",
    component: "states",
  },
  props: {
    children: {
      name: "children",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "This is a Heading",
      control: {
        type: "text",
      },
    },
    size: {
      name: "size",
      type: {
        name: "string",
      },
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: Object.keys(theme.components.Heading.sizes),
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
    heading: "Typography",
    "sub-heading": "Heading",
    // "other-info": {
    //   variants: [
    //     {
    //       Solid:
    //         "Solid Buttons have containers filled with color and indicate the main action. There should be one primary button at most in one section.",
    //     },
    //     {
    //       Outlined:
    //         "Outlined buttons indicate a series of actions without priority.",
    //     },
    //     { Link: "Link button is used for external links." },
    //     {
    //       Ghost:
    //         "Ghost button is used in situations with complex backgrounds, home pages, usually.",
    //     },
    //     {
    //       Disabled:
    //         "The disabled button is used when actions are not available.",
    //     },
    //     {
    //       Loading:
    //         "Loading button includes loading spinner in button, avoiding multiple submits too.",
    //     },
    //     {
    //       "Button with icon":
    //         "Includes icons in the Button component using the leftIcon and rightIcon props, respectively.",
    //     },
    //   ],
    // },
  },
};
