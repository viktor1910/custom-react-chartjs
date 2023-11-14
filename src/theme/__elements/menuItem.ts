import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const menuItemDefaultSettings: {
  defaultProps?: ComponentsProps['MuiMenuItem'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiMenuItem'];
  variants?: ComponentsVariants['MuiMenuItem'];
} = {
  styleOverrides: {
    root: (props: {theme: Theme}) => ({
      padding: props.theme.spacing(1.5, 2),
      '&:hover': {
        backgroundColor: props.theme.palette.interaction?.hover,
      },
    }),
  },
  variants: [],
};

export default menuItemDefaultSettings;
