import { myTheme as theme } from "../../../theme";

export const StorybookTextArgs = {
  children: {
    name: "children",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "This is a Text",
    control: {
      type: "text",
    },
  },
  fontSize: {
    name: "fontSize",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: Object.keys(theme.fontSizes),
  },
  italic: {
    name: "italic",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  bold: {
    name: "bold",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  underline: {
    name: "underline",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  highlight: {
    name: "highlight",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  sub: {
    name: "sub",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  strikeThrough: {
    name: "strikeThrough",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isTruncated: {
    name: "isTruncated",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
};

export const TextArgs = {
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
      defaultValue: "This is a Text",
      control: {
        type: "text",
      },
    },
    fontSize: {
      name: "fontSize",
      type: {
        name: "string",
      },
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: Object.keys(theme.fontSizes),
    },
    states: [
      {
        default: {
          name: "default",
        },
      },
      {
        italic: {
          name: "italic",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        bold: {
          name: "bold",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        underline: {
          name: "underline",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        highlight: {
          name: "highlight",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        sub: {
          name: "sub",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        strikeThrough: {
          name: "strikeThrough",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
      {
        isTruncated: {
          name: "isTruncated",
          type: {
            name: "boolean",
          },
          defaultValue: false,

          control: {
            type: "boolean",
          },
        },
      },
    ],
  },
  metaData: {
    heading: "Typography",
    "sub-heading": "Text",
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
