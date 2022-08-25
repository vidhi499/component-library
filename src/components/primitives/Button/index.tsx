import React from "react";
import { Button as NBButton } from "native-base";

export const Button = ({ ...props }: any) => {
  return <NBButton borderRadius="full" {...props}></NBButton>;
};
