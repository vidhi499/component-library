import React from "react";
import {
  Input as NBInput,
  Box,
  HStack,
  SearchIcon,
  ThreeDotsIcon,
} from "native-base";

export const InputGroup = ({ ...props }: any) => {
  return (
    <HStack
      borderWidth={1}
      justifyContent="center"
      alignItems={"center"}
      borderRadius="full"
      borderColor={"gray.300"}
    >
      <Box pl="3">
        <SearchIcon size="3" />
      </Box>
      <NBInput
        variant={"unstyled"}
        {...props}
        placeholder="Enter Here"
      ></NBInput>
      <Box px="3">
        <ThreeDotsIcon size="3" />
      </Box>
    </HStack>
  );
};
