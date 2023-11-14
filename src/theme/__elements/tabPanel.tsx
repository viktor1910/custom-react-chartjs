import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiTabPanel'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTabPanel'];
  variants?: ComponentsVariants['MuiTabPanel'];
} = {
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};

export default defaultSettings;
