import { appTheme as theme } from '../../../../../../../src/components/core/AppProvider';

export const StorybookArgs = {
  status: {
    name: 'colorScheme',
    type: { name: 'string', required: true },
    defaultValue: 'info',
    options: ['info', 'error', 'success', 'warning'],
    control: {
      type: 'select',
    },
  },
  variant: {
    name: 'variant',
    type: { name: 'string', required: true },
    defaultValue: 'solid',
    options: Object.keys(theme.components.Alert.variants),
    control: {
      type: 'radio',
    },
  },
};
