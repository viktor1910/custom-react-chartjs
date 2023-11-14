import {
  alpha,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const backdropDefaultSettings: {
  defaultProps?: ComponentsProps['MuiBackdrop'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiBackdrop'];
  variants?: ComponentsVariants['MuiBackdrop'];
} = {
  styleOverrides: {
    root: (props: {theme: Theme}) => ({
      backgroundColor: alpha(
        props.theme.palette.neutral?.[900] || 'black',
        0.3
      ),
    }),
  },
};

export default backdropDefaultSettings;
