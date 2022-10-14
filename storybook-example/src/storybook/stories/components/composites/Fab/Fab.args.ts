export const StorybookArgs = {
  placement: {
    name: 'placement',
    type: { name: 'string', required: true },
    defaultValue: 'bottom-right',
    options: ['bottom-right', 'top-right', 'top-left', 'bottom-left'],
    control: {
      type: 'select',
    },
  },
};
