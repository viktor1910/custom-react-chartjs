import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const avatarGroupDefaultSettings: {
  defaultProps?: ComponentsProps['MuiAvatarGroup'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAvatarGroup'];
  variants?: ComponentsVariants['MuiAvatarGroup'];
} = {
  styleOverrides: {
    root: (props: { theme: Theme }) => ({
      flexDirection: 'row',
      '& > .MuiAvatar-root:first-of-type': {
        order: 1,
        zIndex: 1,
      },
      '& > .MuiAvatar-root:last-child': {
        marginLeft: props.theme.spacing(-1),
      },
    }),
    avatar: (props: { theme: Theme }) => ({
      backgroundColor: props.theme.palette.link?.[10],
      color: props.theme.palette.link?.main,
      lineHeight: '16px',
      fontSize: 12,
      fontWeight: 400,
    }),
  },
};

export default avatarGroupDefaultSettings;
