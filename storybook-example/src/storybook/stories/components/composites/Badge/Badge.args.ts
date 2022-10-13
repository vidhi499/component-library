import { appTheme as theme } from '../../../../../../../src/components/core/AppProvider';

export const StorybookArgs = {
  colorScheme: {
    name: 'colorScheme',
    type: { name: 'string', required: true },
    defaultValue: 'info',
    options: ['success', 'danger', 'info', 'warning', 'coolGray'],
    control: {
      type: 'select',
    },
  },
  variant: {
    name: 'variant',
    type: { name: 'string', required: true },
    defaultValue: 'solid',
    options: Object.keys(theme.components.Badge.variants),
    control: {
      type: 'radio',
    },
  },
};
