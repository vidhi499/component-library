import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { theme as defaultTheme } from "../../theme";

export const appTheme = extendTheme(defaultTheme);
export const AppProvider = ({ children, theme, ...props }: any) => {
  return (
    <NativeBaseProvider theme={extendTheme(appTheme, theme)} {...props}>
      {children}
    </NativeBaseProvider>
  );
};
