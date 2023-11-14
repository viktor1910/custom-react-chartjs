import {checkboxClasses, switchClasses} from '@mui/material';
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const switchDefaultSettings: {
  defaultProps?: ComponentsProps['MuiSwitch'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiSwitch'];
  variants?: ComponentsVariants['MuiSwitch'];
} = {
  defaultProps: {
    color: 'default',
  },
  styleOverrides: {
    thumb: {
      boxShadow:
        '0px 0.1px 0.3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    track: (props: {theme: Theme}) => ({
      backgroundColor: props.theme.palette.interaction?.disabled,
    }),
  },
  variants: [
    {
      props: {
        color: 'default',
      },
      style: (props: {theme: Theme}) => ({
        [`&.${switchClasses.root} .${checkboxClasses.checked}`]: {
          color: props.theme.palette.interaction?.main,
          [`&+.${switchClasses.track}`]: {
            backgroundColor: props.theme.palette.interaction?.main,
          },
        },
      }),
    },
  ],
};

export default switchDefaultSettings;
