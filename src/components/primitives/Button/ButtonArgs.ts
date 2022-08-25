import { myTheme as theme } from "../../../theme";

export const StorybookButtonArgs = {
  colorScheme: {
    name: "colorScheme",
    type: { name: "string", required: true },
    defaultValue: "primary",
    options: Object.keys(theme.colors),
    control: {
      type: "select",
    },
  },
  variant: {
    name: "variant",
    type: { name: "string", required: true },
    defaultValue: "solid",
    options: Object.keys(theme.components.Button.variants),
    control: {
      type: "radio",
    },
  },
  children: {
    name: "children",
    type: {
      name: "string",
      required: true,
    },
    defaultValue: "Button",
    control: {
      type: "text",
    },
  },
  isHovered: {
    name: "isHovered",
    type: { name: "boolean" },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isDisabled: {
    name: "isDisabled",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isLoading: {
    name: "isLoading",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  isPressed: {
    name: "isPressed",
    type: {
      name: "boolean",
    },
    defaultValue: false,

    control: {
      type: "boolean",
    },
  },
  sizes: {
    name: "size",
    type: {
      name: "string",
    },
    defaultValue: "md",
    control: {
      type: "select",
    },
    options: ["sm", "md", "lg"],
  },
};

export const ButtonArgs = {
  pages: {
    type: "variant",
    section: "sizes",
    row: "colorScheme",
    component: "states",
  },
  props: {
    variant: {
      name: "variant",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "solid",
      options: Object.keys(theme.components.Button.variants),
      control: {
        type: "radio",
      },
    },
    colorScheme: {
      name: "colorScheme",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "solid",
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "select",
      },
    },
    children: {
      name: "children",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "Button",
      control: {
        type: "text",
      },
    },
    sizes: {
      name: "size",
      type: {
        name: "string",
      },
      defaultValue: "md",
      control: {
        type: "select",
      },
      options: Object.keys(theme.components.Button.sizes).reverse(),
    },
    states: [
      {
        default: {
          name: "default",
        },
      },
      {
        isHovered: {
          name: "isHovered",
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
        isDisabled: {
          name: "isDisabled",
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
        isPressed: {
          name: "isPressed",
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
    heading: "Button",
    "sub-heading":
      "The button component is used to trigger an action or event.",
    "other-info": {
      variants: [
        {
          Solid:
            "Solid Buttons have containers filled with color and indicate the main action. There should be one primary button at most in one section.",
        },
        {
          Outlined:
            "Outlined buttons indicate a series of actions without priority.",
        },
        { Link: "Link button is used for external links." },
        {
          Ghost:
            "Ghost button is used in situations with complex backgrounds, home pages, usually.",
        },
        {
          Disabled:
            "The disabled button is used when actions are not available.",
        },
        {
          Loading:
            "Loading button includes loading spinner in button, avoiding multiple submits too.",
        },
        {
          "Button with icon":
            "Includes icons in the Button component using the leftIcon and rightIcon props, respectively.",
        },
      ],
    },
  },
};
