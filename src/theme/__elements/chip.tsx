import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import { chipClasses } from '@mui/material';
import theme from '../theme';

const chipDefaultSettings: {
  defaultProps?: ComponentsProps['MuiChip'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiChip'];
  variants?: ComponentsVariants['MuiChip'];
} = {
  styleOverrides: {
    root: () => ({
      height: 'auto',
      borderRadius: 25 * theme.shape.borderRadius,
    }),
    label: {
      padding: 0,
      lineHeight: '24px',
      fontSize: 14,
    },
    icon: (props: { theme: Theme }) => ({
      margin: props.theme.spacing(0, 1, 0, 0),
    }),
    deleteIcon: (props: { theme: Theme }) => ({
      margin: props.theme.spacing(0, 0, 0, 1),
    }),
  },
  variants: [
    {
      props: {
        size: '24',
      },
      style: (props: { theme: Theme }) => ({
        padding: props.theme.spacing(0, 1.5),
        [`& .${chipClasses.icon}`]: {
          margin: props.theme.spacing(0, 0.5, 0, 0),
        },
        [`& .${chipClasses.deleteIcon}`]: {
          margin: props.theme.spacing(0, 0, 0, 0.5),
          width: 12,
          height: 12,
        },
      }),
    },
    {
      props: {
        size: '32',
      },
      style: (props: { theme: Theme }) => ({
        padding: props.theme.spacing(0.5, 1.5),
        fontSize: 13,
        [`& .${chipClasses.deleteIcon}`]: {
          margin: props.theme.spacing(0, 0, 0, 1),
          width: 14,
          height: 14,
        },
      }),
    },
    {
      props: {
        size: '40',
      },
      style: (props: { theme: Theme }) => ({
        padding: props.theme.spacing(1, 1.5),
        [`& .${chipClasses.deleteIcon}`]: {
          margin: props.theme.spacing(0, 0, 0, 0.5),
          width: 20,
          height: 20,
        },
      }),
    },
    {
      props: {
        color: 'default',
      },
      style: (props: { theme: Theme }) => ({
        backgroundColor: props.theme.palette.interaction?.placeholder,
        color: props.theme.palette.interaction?.sub,
      }),
    },
    {
      props: {
        color: 'ghost',
      },
      style: (props: { theme: Theme }) => ({
        backgroundColor: props.theme.palette.interaction?.placeholder,
        color: props.theme.palette.interaction?.main,
      }),
    },
    {
      props: {
        color: 'success',
      },
      style: (props: { theme: Theme }) => ({
        backgroundColor: props.theme.palette.success[100],
        color: props.theme.palette.success[900],
      }),
    },
    {
      props: {
        color: 'warning',
      },
      style: (props: { theme: Theme }) => ({
        backgroundColor: props.theme.palette.warning[200],
        color: props.theme.palette.warning[900],
      }),
    },
    {
      props: {
        color: 'error',
      },
      style: (props: { theme: Theme }) => ({
        backgroundColor: props.theme.palette.error[50],
        color: props.theme.palette.error[900],
      }),
    },
    {
      props: {
        color: 'secondary',
      },
      style: (props: { theme: Theme }) => ({
        backgroundColor: props.theme.palette.interaction?.warning,
        color: props.theme.palette.interaction?.white,
        ':hover': {
          backgroundColor: props.theme.palette.warning[700],
        },
      }),
    },
  ],
};

export default chipDefaultSettings;
