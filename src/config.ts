import { StorybookInputGroupArgs } from "./components/composites";
import {
  StorybookButtonArgs,
  StorybookHeadingArgs,
  StorybookTextArgs,
} from "./components/primitives";
import { myTheme } from "./theme";

export const config = {
  components: {
    Button: {
      args: StorybookButtonArgs,
      pageConfig: {
        type: "variant",
        section: "sizes",
        row: "colorScheme",
        component: "states",
        metaData: {
          heading: "This is a Button.",
        },
      },
    },
    Text: {
      args: StorybookTextArgs,
      pageConfig: {
        type: "",
        section: "component",
        row: "fontSize",
        component: "states",
        metaData: {
          heading: "Typography",
          "sub-heading": "Text",
        },
      },
    },
    Heading: {
      args: StorybookHeadingArgs,
      pageConfig: {
        type: "",
        section: "component",
        row: "fontSize",
        component: "states",
        metaData: {
          heading: "Typography",
          "sub-heading": "Heading",
        },
      },
    },
    InputGroup: {
      args: StorybookInputGroupArgs,
      pageConfig: {
        type: "",
        section: "variant",
        row: "backgroundColor",
        component: "states",
        metaData: {
          heading: "InputGroup",
          "sub-heading": "This is an custom input.",
        },
      },
    },
  },
  foundation: {
    Colors: {},
  },
  theme: myTheme,
  metaData: {},
  hooks: {},
};
