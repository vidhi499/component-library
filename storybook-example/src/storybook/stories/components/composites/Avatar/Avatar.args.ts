import { appTheme as theme } from '../../../../../../../src/components/core/AppProvider';

export const StorybookArgs = {
  size: {
    name: 'size',
    type: {
      name: 'string',
    },
    defaultValue: 'md',
    control: {
      type: 'select',
    },
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  },
};
