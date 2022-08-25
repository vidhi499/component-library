import React from "react";
import {
  NativeBaseProvider,
  Heading,
  StorybookHeadingArgs,
  Box,
} from "my-com-lib";

const HeadingComponent = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Box alignItems={"center"} w="100%">
        <Heading {...args}></Heading>
      </Box>
    </NativeBaseProvider>
  );
};

export const Basic = HeadingComponent.bind({});

export default {
  title: "Heading",
  component: Basic,
  argTypes: StorybookHeadingArgs,
};
