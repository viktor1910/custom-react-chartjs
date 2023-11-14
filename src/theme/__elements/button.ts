import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import {buttonClasses} from '@mui/material';

const buttonDefaultSettings: {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
} = {
  defaultProps: {
    color: 'default',
    variant: 'contained',
    size: '40',
  },
  styleOverrides: {
    root: props => ({
      borderRadius: '1000px',
      fontWeight: 700,
      textTransform: 'none',
      boxShadow: 'none',
      ':hover': {
        boxShadow: 'none',
      },
      [`&.${buttonClasses.disabled}`]: {
        color: props.theme.palette.interaction?.sub,
      },
    }),
    outlined: {
      border: 'none',
      outline: '1px solid',
      outlineOffset: -1,
      ':hover': {
        border: 'none',
      },
    },
  },
  variants: [
    {
      props: {
        size: '32',
      },
      style: (props: {theme: Theme}) => ({
        padding: props.theme.spacing(1, 2),
        fontSize: 12,
        lineHeight: '16px',
        '& svg': {
          width: 16,
          height: 16,
        },
      }),
    },
    {
      props: {size: '40'},
      style: (props: {theme: Theme}) => ({
        padding: props.theme.spacing(1.5, 2.5),
        fontSize: 12,
        lineHeight: '16px',
        '& svg': {width: 20, height: 20},
      }),
    },
    {
      props: {
        size: '48',
      },
      style: (props: {theme: Theme}) => ({
        padding: props.theme.spacing(1.5, 2),
        fontSize: 14,
        lineHeight: '24px',
        '& svg': {
          width: 24,
          height: 24,
        },
      }),
    },
    {
      props: {
        size: '56',
      },
      style: (props: {theme: Theme}) => ({
        padding: props.theme.spacing(2, 4),
        fontSize: 14,
        lineHeight: '24px',
        '& svg': {
          width: 24,
          height: 24,
        },
      }),
    },
    {
      props: {
        color: 'ghost',
      },
      style: (props: {theme: Theme}) => ({
        color: props.theme.palette.interaction?.main,
      }),
    },
  ],
};

export default buttonDefaultSettings;
