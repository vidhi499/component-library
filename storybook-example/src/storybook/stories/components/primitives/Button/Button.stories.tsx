import React from "react";
import { Box, Button } from "../../../../../../../src";
import Wrapper from "../../Wrapper";
import { ArgsTable } from "@storybook/addon-docs";
import { myTheme } from "../../Wrapper";

const ButtonTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Box alignItems="center">
        {/* @ts-ignore */}
        <Button {...args} onPress={() => console.log("hello world")}></Button>
      </Box>
    </Wrapper>
  );
};

export const Primary = ButtonTest.bind({});

export default {
  title: "Button",
  component: Primary,
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: true },
      defaultValue: "solid",
      options: Object.keys(myTheme.components.Button.variants),
      control: {
        type: "select",
      },
    },
    children: {
      name: "children",
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "Button",
      control: {
        type: "text",
      },
    },
  },
};
