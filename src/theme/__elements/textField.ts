import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
} = {
  defaultProps: {
    size: '40',
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
  },
};

export default defaultSettings;
