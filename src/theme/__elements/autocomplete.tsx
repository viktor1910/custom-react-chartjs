import {autocompleteClasses, outlinedInputClasses} from '@mui/material';
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const settings: {
  defaultProps?: ComponentsProps['MuiAutocomplete'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAutocomplete'];
  variants?: ComponentsVariants['MuiAutocomplete'];
} = {
  defaultProps: {
    size: '40',
  },
  styleOverrides: {
    inputRoot: props => ({
      display: 'flex',
      gap: props.theme.spacing(0.5),
      paddingBlock: `${props.theme.spacing(0.5)}!important`,
      paddingLeft: `${props.theme.spacing(0.5)}!important`,
      borderRadius: 24,
    }),
    tag: {
      margin: 0,
    },
    listbox: props => ({
      padding: props.theme.spacing(2),
    }),
    option: props => ({
      justifyContent: 'space-between!important',
      padding: `${props.theme.spacing(0, 1.5)}!important`,
      borderRadius: 16,
      '&:not(:last-child)': {
        marginBottom: props.theme.spacing(1),
      },
    }),
  },
  variants: [
    {
      props: {
        size: '32',
      },
      style: props => ({
        [`& .${outlinedInputClasses.input}.${autocompleteClasses.input}`]: {
          padding: props.theme.spacing(0.5, 1.5, 0.5, 2),
        },
      }),
    },
    {
      props: {
        size: '40',
      },
      style: props => ({
        [`& .${outlinedInputClasses.input}.${autocompleteClasses.input}`]: {
          padding: props.theme.spacing(0.5, 1.5, 0.5, 2),
        },
      }),
    },
  ],
};

export default settings;
