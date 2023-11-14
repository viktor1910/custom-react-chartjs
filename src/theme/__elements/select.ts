import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiSelect'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiSelect'];
  variants?: ComponentsVariants['MuiSelect'];
} = {
  defaultProps: {
    size: '40',
  },
  styleOverrides: {
    select: {
      display: 'flex',
      alignItems: 'center',
    },
    iconOutlined: {
      cursor: 'pointer',
    },
  },
};

export default defaultSettings;
