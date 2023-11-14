import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiTabs'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTabs'];
  variants?: ComponentsVariants['MuiTabs'];
} = {
  styleOverrides: {
    root: {
      minHeight: 0,
    },
    flexContainer: ({theme}) => ({
      gap: theme.spacing(3),
    }),
  },
};

export default defaultSettings;
