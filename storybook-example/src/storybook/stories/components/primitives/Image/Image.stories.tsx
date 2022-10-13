import {  Wrapper } from '../../Wrapper';
import {  StorybookArgs } from './Image.args';

import React from 'react';
import { Image } from 'components';

const ImageTest = ({ ...args }) => {
  return (
    <Wrapper>
      <Image
        {...args}
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
  
      />
    </Wrapper>
  );
};

export const ImageComponent = ImageTest.bind({});

export default {
  title: 'primitives/Image',
  component: ImageComponent,
  argTypes: StorybookArgs,
};
