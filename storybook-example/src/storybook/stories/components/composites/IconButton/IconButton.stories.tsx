import { Wrapper } from '../../Wrapper';
import { StorybookArgs } from './IconButton.args';

import React from 'react';
import { IconButton, CheckIcon } from 'components';
import { AntDesign } from '@expo/vector-icons';

const IconButtonTest = ({ ...args }) => {
  return (
    <Wrapper>
      <IconButton {...args} icon={<CheckIcon />} />
    </Wrapper>
  );
};

export const IconButtonComponent = IconButtonTest.bind({});

export default {
  title: 'composites/IconButton',
  component: IconButtonComponent,
  argTypes: StorybookArgs,
};
