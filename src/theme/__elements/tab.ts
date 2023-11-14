import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiTab'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTab'];
  variants?: ComponentsVariants['MuiTab'];
} = {
  styleOverrides: {
    root: ({theme}) => ({
      padding: theme.spacing(0, 0, 0.5, 0),
      minWidth: 0,
      minHeight: 0,
      fontWeight: 'bold',
      textTransform: 'none',
    }),
  },
};

export default defaultSettings;
