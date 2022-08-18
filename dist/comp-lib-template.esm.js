import { extendTheme } from 'native-base';
export { Box, Button, NativeBaseProvider } from 'native-base';

var myTheme = /*#__PURE__*/extendTheme({
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
      "900": "#0e2b64"
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
      "900": "#0e2b64"
    }
  },
  components: {
    Button: {
      variants: {
        solid: function solid(_ref) {
          return {
            bg: "pink.500",
            rounded: "full"
          };
        },
        rounded: function rounded(_ref2) {
          return {
            bg: "pink.500",
            rounded: "full",
            opacity: "0.5"
          };
        }
      }
    },
    Checkbox: {
      sizes: {
        xl: {
          boxSize: "20"
        }
      }
    }
  }
});

var ButtonArgs = {
  colorScheme: {
    name: "colorScheme",
    type: {
      name: "string",
      required: true
    },
    defaultValue: "primary",
    options: /*#__PURE__*/Object.keys(myTheme.colors),
    control: {
      type: "select"
    }
  },
  variant: {
    name: "variant",
    type: {
      name: "string",
      required: true
    },
    defaultValue: "solid",
    options: /*#__PURE__*/Object.keys(myTheme.components.Button.variants),
    control: {
      type: "radio"
    }
  },
  children: {
    name: "children",
    type: {
      name: "string",
      required: true
    },
    defaultValue: "Button",
    control: {
      type: "text"
    }
  },
  isHovered: {
    name: "isHovered",
    type: {
      name: "boolean"
    },
    defaultValue: false,
    control: {
      type: "boolean"
    }
  }
};

export { ButtonArgs };
//# sourceMappingURL=comp-lib-template.esm.js.map
