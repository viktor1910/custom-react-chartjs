import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const avatarDefaultSettings: {
  defaultProps?: ComponentsProps['MuiAvatar'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAvatar'];
  variants?: ComponentsVariants['MuiAvatar'];
} = {
  styleOverrides: {
    root: {
      '& svg': {
        width: '100%',
        height: '100%',
      },
    },
  },
};

export default avatarDefaultSettings;
