import React from "react";
import {
  NativeBaseProvider,
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
} from "my-com-lib";

const HeadingComponent = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Icon />
    </NativeBaseProvider>
  );
};

export const Basic = HeadingComponent.bind({});

export default {
  title: "Heading",
  component: Basic,
  argTypes: StorybookHeadingArgs,
};
