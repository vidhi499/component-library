// import React from "react";
// import {
//   ITheme,
//   NativeBaseProvider as NBProvider,
//   NativeBaseProviderProps,
// } from "native-base";
// import { myTheme } from "../../theme";

// export const NativeBaseProvider = ({ children, theme, ...props }: any) => {
//   let themeArr = [myTheme];
//   if (theme) {
//     //TODO: if theme is array it might break
//     themeArr.push(theme);
//   }
//   console.log(props, "TEST");
//   return (
//     <NBProvider theme={myTheme} {...props}>
//       {children}
//     </NBProvider>
//   );
// };
export { NativeBaseProvider } from "native-base";