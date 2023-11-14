import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const menuDefaultSettings: {
  defaultProps?: ComponentsProps['MuiMenu'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiMenu'];
  variants?: ComponentsVariants['MuiMenu'];
} = {
  styleOverrides: {
    paper: (props: {theme: Theme}) => ({
      borderRadius: 16,
      boxShadow: props.theme.shadows[2],
    }),
  },
  variants: [],
};

export default menuDefaultSettings;
