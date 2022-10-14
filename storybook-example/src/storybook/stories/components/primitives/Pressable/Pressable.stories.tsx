import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Pressable.args';

import React from 'react';
import { Pressable, Text, Box, HStack, Flex, Badge } from 'components';

const PressableTest = ({ ...args }) => {
  return (
    <Wrapper>
      {/* <Pressable
        onPress={() => console.log("I'm Pressed")}
        rounded="8"
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        maxW="96"
        shadow="3"
        bg="coolGray.100"
        p="5"
      >
        <Box>
          <HStack alignItems="center" justifyContent="space-between">
            <Badge
              colorScheme="darkBlue"
              _text={{ color: 'white' }}
              variant="solid"
              rounded="4"
            >
              Business
            </Badge>
            <Text fontSize={10} color="coolGray.800">
              1 month ago
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Marketing License
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text>
          </Flex>
        </Box>
      </Pressable> */}
      <Pressable maxW="96">
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? 'coolGray.200'
                  : isHovered
                  ? 'coolGray.200'
                  : 'coolGray.100'
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              p="5"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300"
            >
              <HStack alignItems="center" justifyContent="space-between">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4"
                >
                  Business
                </Badge>

                <Text fontSize={10} color="coolGray.800">
                  1 month ago
                </Text>
              </HStack>
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl"
              >
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                {isFocused ? (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    textDecorationLine="underline"
                    color="darkBlue.600"
                    alignSelf="flex-start"
                  >
                    Read More
                  </Text>
                ) : (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    color="darkBlue.600"
                  >
                    Read More
                  </Text>
                )}
              </Flex>
            </Box>
          );
        }}
      </Pressable>
    </Wrapper>
  );
};

export const PressableComponent = PressableTest.bind({});

export default {
  title: 'primitives/Pressable',
  component: PressableComponent,
  argTypes: StorybookArgs,
};
