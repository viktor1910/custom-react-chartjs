import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const buttonDefaultSettings: {
  defaultProps?: ComponentsProps['MuiIconButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiIconButton'];
  variants?: ComponentsVariants['MuiIconButton'];
} = {
  defaultProps: {
    color: 'default',
  },
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
  variants: [
    {
      props: {
        size: '24',
      },
      style: {
        width: 24,
        height: 24,
        '& svg': {
          width: 12,
          height: 12,
        },
      },
    },
    {
      props: {
        size: '32',
      },
      style: {
        width: 32,
        height: 32,
        '& svg': {
          width: 16,
          height: 16,
        },
      },
    },
    {
      props: {size: '40'},
      style: {width: 40, height: 40, '& svg': {width: 20, height: 20}},
    },
    {
      props: {
        size: '48',
      },
      style: {
        width: 48,
        height: 48,
        '& svg': {
          width: 24,
          height: 24,
        },
      },
    },
    {
      props: {
        size: '56',
      },
      style: {
        width: 56,
        height: 56,
        '& svg': {
          width: 24,
          height: 24,
        },
      },
    },
    {
      props: {
        color: 'default',
      },
      style: (props: {theme: Theme}) => ({
        backgroundColor: props.theme.palette.default?.main,
        color: props.theme.palette.interaction?.white,
        ':hover': {
          backgroundColor: props.theme.palette.default?.dark,
        },
      }),
    },
    {
      props: {
        color: 'secondary',
      },
      style: (props: {theme: Theme}) => ({
        backgroundColor: 'transparent',
        border: `1px solid ${props.theme.palette.default?.main}`,
        color: props.theme.palette.default?.main,
        ':hover': {
          borderColor: props.theme.palette.default?.dark,
        },
      }),
    },
    {
      props: {
        color: 'pressed',
      },
      style: (props: {theme: Theme}) => ({
        backgroundColor: props.theme.palette.pressed?.main,
        color: props.theme.palette.interaction?.white,
        ':hover': {
          backgroundColor: props.theme.palette.pressed?.dark,
        },
      }),
    },
    {
      props: {
        color: 'ghost',
      },
      style: (props: {theme: Theme}) => ({
        backgroundColor: props.theme.palette.ghost?.main,
        color: props.theme.palette.interaction?.main,
        ':hover': {
          backgroundColor: props.theme.palette.ghost?.dark,
        },
      }),
    },
    {
      props: {
        color: 'transparent',
      },
      style: (props: {theme: Theme}) => ({
        backgroundColor: 'transparent',
        color: props.theme.palette.interaction?.main,
        ':hover': {
          backgroundColor: props.theme.palette.interaction?.placeholder,
        },
      }),
    },
    {
      props: {
        color: 'slate',
      },
      style: (props: {theme: Theme}) => ({
        backgroundColor: props.theme.palette.neutral?.main,
        opacity: 0.5,
        color: props.theme.palette.interaction?.white,
        ':hover': {
          backgroundColor: props.theme.palette.neutral?.[900],
        },
      }),
    },
  ],
};

export default buttonDefaultSettings;
