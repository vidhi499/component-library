import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './Alert.args';

import React from 'react';
import {
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Heading,
  Center,
} from 'components';

const AlertTest = ({ ...args }) => {
  const getTextColor = (variant: any) => {
    switch (variant) {
      case 'left-accent':
      case 'top-accent':
      case 'subtle':
        return 'coolGray.800';

      case 'solid':
        return 'warmGray.50';
    }
  };
  return (
    <Wrapper>
      <Alert {...args} maxW="400">
        <VStack space={1} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Heading
                fontSize="md"
                fontWeight="medium"
                color={getTextColor(args.variant)}
              >
                We are going live in July!
              </Heading>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{ borderWidth: 0 }}
              icon={<CloseIcon size="3" />}
              // @ts-ignore
              _icon={{ color: getTextColor(args.variant) }}
            />
          </HStack>
          <Box pl="6" _text={{ color: getTextColor(args.variant) }}>
            We are happy to announce that we are going live on July 28th. Get
            ready!
          </Box>
        </VStack>
      </Alert>
    </Wrapper>
  );
};

export const AlertComponent = AlertTest.bind({});

export default {
  title: 'composites/Alert',
  component: AlertComponent,
  argTypes: StorybookArgs,
};
