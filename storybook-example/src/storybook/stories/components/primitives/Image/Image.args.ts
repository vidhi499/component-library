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
  borderRadius: {
    name: 'borderRadius',
    type: {
      name: 'string',
    },
    defaultValue: '100',
    control: {
      type: 'text',
    },
    // options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  },
};
