import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiDialog'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiDialog'];
  variants?: ComponentsVariants['MuiDialog'];
} = {
  styleOverrides: {
    paper: props => ({
      borderRadius: props.ownerState.fullScreen ? 0 : props.theme.spacing(2),
    }),
  },
};

export default defaultSettings;
