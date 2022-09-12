import React from "react";
import { NativeBaseProvider, Icon, StorybookIconArgs, Box } from "my-com-lib";

const IconComponent = ({ ...args }) => {
  return (
    <NativeBaseProvider>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Icon {...args} color="coolGray.800" />
      </Box>
    </NativeBaseProvider>
  );
};

export const Basic = IconComponent.bind({});

export default {
  title: "Icon",
  component: Basic,
  argTypes: StorybookIconArgs,
};
