import React from "react";
import {
  NativeBaseProvider,
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  AddIcon,
} from "my-com-lib";
// import { StorybookIconArgs } from "../../../../../../../src/components/primitives/Icon/IconArgs";

const HeadingComponent = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <AddIcon {...args} />
    </NativeBaseProvider>
  );
};

export const Basic = HeadingComponent.bind({});

export default {
  title: "Icon",
  component: Basic,
  argTypes: StorybookIconArgs,
};
