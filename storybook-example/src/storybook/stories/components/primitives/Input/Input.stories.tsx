import React from "react";
import {
  NativeBaseProvider,
  Heading,
  StorybookHeadingArgs,
  Box,
  Icon,
  StorybookIconArgs,
  Input,
  StorybookInputArgs,
} from "my-com-lib";

const InputComponent = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Box alignItems={"center"}>
        <Input {...args} w="40%" />
      </Box>
    </NativeBaseProvider>
  );
};

export const Basic = InputComponent.bind({});

export default {
  title: "Input",
  component: Basic,
  argTypes: StorybookInputArgs,
};
