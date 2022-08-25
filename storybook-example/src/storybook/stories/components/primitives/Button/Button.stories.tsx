import React from "react";
import {
  NativeBaseProvider,
  Button,
  StorybookButtonArgs,
  Box,
} from "my-com-lib";

const ButtonTest = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Box alignItems={"center"}>
        {/* @ts-ignore */}
        <Button {...args} onPress={() => console.log("hello world")}></Button>
      </Box>
    </NativeBaseProvider>
  );
};

export const Primary = ButtonTest.bind({});

export default {
  title: "Button",
  component: Primary,
  argTypes: StorybookButtonArgs,
};
