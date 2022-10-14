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
    options: ['xs', 'sm', 'md', 'lg'],
  },
  colorScheme: {
    name: 'colorScheme',
    type: { name: 'string', required: true },
    defaultValue: 'primary',
    options: ['primary', 'secondary', 'tertiary'],
    control: {
      type: 'select',
    },
  },
  variant: {
    name: 'variant',
    type: { name: 'string', required: true },
    defaultValue: 'solid',
    options: Object.keys(theme.components.Button.variants),
    control: {
      type: 'radio',
    },
  },
  isHovered: {
    name: 'isHovered',
    type: { name: 'boolean' },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isDisabled: {
    name: 'isDisabled',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isPressed: {
    name: 'isPressed',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
  isFocusVisible: {
    name: 'isFocusVisible',
    type: {
      name: 'boolean',
    },
    defaultValue: false,

    control: {
      type: 'boolean',
    },
  },
};
