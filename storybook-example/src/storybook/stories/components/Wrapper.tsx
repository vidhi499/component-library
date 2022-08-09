import React from "react";
import {
  Box,
  useColorMode,
  IconButton,
  MoonIcon,
  ColorMode,
  useColorModeValue,
  Tooltip,
  SunIcon,
  extendTheme,
  Button,
  Input,
} from "native-base";
import { NativeBaseProvider } from "../../../../../src";

// import Config from "../../../nativebase.config";
export const myTheme = extendTheme({
  // colors: {
  //   newColor: {
  //     "50": "#2878ff",
  //     "100": "#2570ff",
  //     "200": "#2368f3",
  //     "300": "#2060e0",
  //     "400": "#1d58cd",
  //     "500": "#1b50bb",
  //     "600": "#1848a8",
  //     "700": "#153e91",
  //     "800": "#11347b",
  //     "900": "#0e2b64",
  //   },
  //   primary: {
  //     "50": "#2878ff",
  //     "100": "#2570ff",
  //     "200": "#2368f3",
  //     "300": "#2060e0",
  //     "400": "#1d58cd",
  //     "500": "#1b50bb",
  //     "600": "#1848a8",
  //     "700": "#153e91",
  //     "800": "#11347b",
  //     "900": "#0e2b64",
  //   },
  // },
  // components: {
  //   Button: {
  //     variants: {
  //       rounded: ({ colorScheme }) => {
  //         return {
  //           bg: `${colorScheme}.500`,
  //           rounded: "full",
  //         };
  //       },
  //     },
  //   },
  //   Checkbox: {
  //     sizes: {
  //       xl: { boxSize: "20" },
  //     },
  //   },
  // },
});

function MyWrapper({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Box
      h="100vh"
      px="3"
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      safeAreaY
    >
      <Tooltip
        label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
        placement="bottom right"
        openDelay={300}
        closeOnClick={false}
      >
        <IconButton
          position="absolute"
          top={12}
          right={8}
          zIndex={4}
          //@ts-ignore
          onPress={toggleColorMode}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          size="lg"
        />
      </Tooltip>
      {children}
    </Box>
  );
}

export function RenderTestButton() {
  const [state, setState] = React.useState(1);
  return (
    <Box
      //@ts-ignore
      style={{ position: "absolute", top: 10, left: 20 }}
      m={2}
      bg="red.100"
    >
      <Input m={2} size="my-size" />
      <Button
        size=""
        variant={"myNewButton"}
        // title={state.toString()}
        onPress={() => setState(state + 1)}
      />
    </Box>
  );
}
export default function Wrapper({ children }) {
  // const colorModeManager: StorageManager = {
  //   get: async () => {
  //     try {
  //       const val = await localStorage.getItem("@example-wrapper-mode");
  //       return val === "dark" ? "dark" : "light";
  //     } catch (e) {
  //       console.log(e);
  //       return "light";
  //     }
  //   },
  //   set: async (value: ColorMode) => {
  //     try {
  //       //@ts-ignore

  //       await localStorage.setItem("@example-wrapper-mode", value);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  // };
  return (
    <NativeBaseProvider
      //@ts-ignore
      theme={myTheme}
      // config={Config}
      // colorModeManager={colorModeManager}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {children}
    </NativeBaseProvider>
  );
}
