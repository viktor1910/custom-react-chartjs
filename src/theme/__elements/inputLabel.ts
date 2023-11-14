import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import {inputLabelClasses} from '@mui/material';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiInputLabel'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiInputLabel'];
  variants?: ComponentsVariants['MuiInputLabel'];
} = {
  defaultProps: {
    focused: false,
  },
  styleOverrides: {
    root: props => ({
      position: 'relative',
      transform: 'none',
      lineHeight: '24px',
      fontSize: 14,
      color: props.theme.palette.interaction?.sub,
      '&:focus': {
        color: props.theme.palette.interaction?.sub,
      },
      [`&.${inputLabelClasses.disabled}`]: {
        color: props.theme.palette.interaction?.sub,
      },
    }),
    asterisk: props => ({
      color: props.theme.palette.interaction?.danger,
    }),
  },
};

export default defaultSettings;
