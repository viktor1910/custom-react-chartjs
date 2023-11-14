import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import theme from '../theme';

const defaultSetting: {
  defaultProps?: ComponentsProps['MuiAlert'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAlert'];
  variants?: ComponentsVariants['MuiAlert'];
} = {
  styleOverrides: {
    root: props => ({
      borderRadius: props.theme.spacing(1),
      padding: props.theme.spacing(1, 2),
      color: theme.palette.interaction?.white,
      alignItems: 'center',
    }),
    message: {
      padding: 0,
    },
    action: props => ({
      marginRight: 0,
      padding: props.theme.spacing(0, 0, 0, 2),
    }),
  },
  variants: [
    {
      props: {
        severity: 'success',
      },
      style: props => ({
        backgroundColor: props.theme.palette.interaction?.success,
      }),
    },
    {
      props: {
        severity: 'error',
      },
      style: props => ({
        backgroundColor: props.theme.palette.interaction?.danger,
      }),
    },
    {
      props: {
        severity: 'warning',
      },
      style: props => ({
        backgroundColor: props.theme.palette.interaction?.warning,
      }),
    },
  ],
};

export default defaultSetting;
