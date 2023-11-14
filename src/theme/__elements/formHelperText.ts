import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiFormHelperText'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiFormHelperText'];
  variants?: ComponentsVariants['MuiFormHelperText'];
} = {
  styleOverrides: {
    root: props => ({
      margin: props.theme.spacing(0.5, 0, 0, 0),
      lineHeight: '16px',
      fontSize: 12,
      color: props.theme.palette.interaction?.sub,
    }),
  },
};

export default defaultSettings;
