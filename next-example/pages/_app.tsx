import React from 'react';
import type { AppProps } from 'next/app';
// import { NativeBaseProvider } from 'native-base';
import { NativeBaseProvider } from 'comp-lib-template';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}
export default MyApp;
