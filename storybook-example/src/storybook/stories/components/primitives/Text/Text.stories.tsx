import React from "react";
import { NativeBaseProvider, Text, StorybookTextArgs, Box } from "my-com-lib";

const TextComponent = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Box alignItems={"center"} w="100%">
        <Text {...args}></Text>
      </Box>
    </NativeBaseProvider>
  );
};

export const Basic = TextComponent.bind({});

export default {
  title: "Text",
  component: Basic,
  argTypes: StorybookTextArgs,
};
