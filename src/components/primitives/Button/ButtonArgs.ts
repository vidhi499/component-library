import { myTheme as theme } from "../../../theme";

export const ButtonArgs = {
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
