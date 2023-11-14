import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import {outlinedInputClasses} from '@mui/material';

const outlinedInputDefaultSettings: {
  defaultProps?: ComponentsProps['MuiOutlinedInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'];
  variants?: ComponentsVariants['MuiOutlinedInput'];
} = {
  styleOverrides: {
    root: props => ({
      borderRadius: 25 * props.theme.shape.borderRadius,
      backgroundColor: props.theme.palette.interaction?.white,
      fontSize: 14,
      [`&.${outlinedInputClasses.focused}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderWidth: 1,
          borderColor: props.theme.palette.interaction?.main,
        },
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        backgroundColor: props.theme.palette.interaction?.placeholder,
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: props.theme.palette.interaction?.disabled,
        },
      },
    }),
    input: props => ({
      lineHeight: '24px',
      height: 'auto',
      '&::placeholder': {
        color: props.theme.palette.system?.placeholder,
        opacity: 1,
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        color: props.theme.palette.interaction?.sub,
        textFillColor: props.theme.palette.interaction?.sub,
      },
    }),
    multiline: props => ({
      borderRadius: props.theme.spacing(2),
      padding: props.theme.spacing(1.5),
    }),
    inputMultiline: {
      padding: '0!important',
    },
    notchedOutline: (props: {theme: Theme}) => ({
      borderWidth: 1,
      borderColor: props.theme.palette.interaction?.disabled,
      top: 0,
      '& legend': {
        display: 'none',
      },
    }),
  },
  variants: [
    {
      props: {
        size: '32',
      },
      style: (props: {theme: Theme}) => ({
        [`& .${outlinedInputClasses.input}`]: {
          padding: props.theme.spacing(0.5, 1.5, 0.5, 2),
        },
      }),
    },
    {
      props: {
        size: '40',
      },
      style: (props: {theme: Theme}) => ({
        [`& .${outlinedInputClasses.input}`]: {
          padding: props.theme.spacing(1, 1.5, 1, 2),
        },
      }),
    },
    {
      props: {
        size: '48',
      },
      style: (props: {theme: Theme}) => ({
        [`& .${outlinedInputClasses.input}`]: {
          padding: props.theme.spacing(1.5, 1.5, 1.5, 2),
        },
      }),
    },
    {
      props: {
        color: 'error',
      },
      style: (props: {theme: Theme}) => ({
        color: props.theme.palette.error.main,
        backgroundColor: props.theme.palette.interaction?.white,
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${props.theme.palette.error.main}!important`,
        },
      }),
    },
    {
      props: {
        color: 'warning',
      },
      style: (props: {theme: Theme}) => ({
        color: props.theme.palette.warning.main,
        backgroundColor: props.theme.palette.interaction?.white,
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${props.theme.palette.warning.main}!important`,
        },
      }),
    },
    {
      props: {
        error: true,
      },
      style: (props: {theme: Theme}) => ({
        color: props.theme.palette.error.main,
        backgroundColor: props.theme.palette.interaction?.white,
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${props.theme.palette.error.main}!important`,
        },
      }),
    },
  ],
};

export default outlinedInputDefaultSettings;
