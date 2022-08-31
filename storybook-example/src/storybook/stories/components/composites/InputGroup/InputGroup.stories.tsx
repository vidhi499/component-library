import React from "react";
import {
  NativeBaseProvider,
  InputGroup,
  Box,
  StorybookInputGroupArgs,
} from "my-com-lib";

const InputGroupTest = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Box alignItems={"center"}>
        {/* @ts-ignore */}
        <InputGroup
          {...args}
          onPress={() => console.log("hello world")}
        ></InputGroup>
      </Box>
    </NativeBaseProvider>
  );
};

export const Primary = InputGroupTest.bind({});

export default {
  title: "InputGroup",
  component: Primary,
  argTypes: StorybookInputGroupArgs,
};
