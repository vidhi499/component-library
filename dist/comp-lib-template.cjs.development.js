'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var nativeBase = require('native-base');
var React = _interopDefault(require('react'));

var myTheme = /*#__PURE__*/nativeBase.extendTheme({
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children", "theme"];
var NativeBaseProvider = function NativeBaseProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  console.log(props, "TEST");
  return /*#__PURE__*/React.createElement(nativeBase.NativeBaseProvider, Object.assign({
    theme: myTheme
  }, props), children);
}; // export { NativeBaseProvider } from "native-base";

Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function () {
    return nativeBase.Box;
  }
});
Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () {
    return nativeBase.Button;
  }
});
Object.defineProperty(exports, 'Heading', {
  enumerable: true,
  get: function () {
    return nativeBase.Heading;
  }
});
Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function () {
    return nativeBase.Text;
  }
});
exports.ButtonArgs = ButtonArgs;
exports.NativeBaseProvider = NativeBaseProvider;
//# sourceMappingURL=comp-lib-template.cjs.development.js.map
