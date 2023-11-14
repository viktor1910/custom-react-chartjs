import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const breadcrumbsDefaultSettings: {
  defaultProps?: ComponentsProps['MuiBreadcrumbs'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiBreadcrumbs'];
  variants?: ComponentsVariants['MuiBreadcrumbs'];
} = {
  styleOverrides: {
    li: {
      display: 'flex',
    },
    separator: (props: {theme: Theme}) => ({
      fontSize: 10,
      color: props.theme.palette.interaction?.sub,
    }),
  },
};

export default breadcrumbsDefaultSettings;
