import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const defaultSettings: {
  defaultProps?: ComponentsProps['MuiTablePagination'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTablePagination'];
  variants?: ComponentsVariants['MuiTablePagination'];
} = {
  styleOverrides: {
    toolbar: (props: {theme: Theme}) => ({
      minHeight: '0!important',
      padding: `${props.theme.spacing(3)}!important`,
    }),
    spacer: {
      display: 'none',
    },
    select: (props: {theme: Theme}) => ({
      lineHeight: '24px',
      border: `1px solid ${props.theme.palette.interaction?.disabled}`,
      borderRadius: props.theme.spacing(0.5),
      padding: `${props.theme.spacing(0.5, 5, 0.5, 1.5)}!important`,
      marginRight: props.theme.spacing(1),
      textAlign: 'left',
      textAlignLast: 'left',
    }),
    selectLabel: (props: {theme: Theme}) => ({
      margin: 0,
      fontSize: 14,
      lineHeight: '24px',
      color: props.theme.palette.interaction?.sub,
    }),
    selectIcon: (props: {theme: Theme}) => ({
      width: 18,
      height: 18,
      top: 'auto',
      right: props.theme.spacing(2.5),
    }),
    displayedRows: (props: {theme: Theme}) => ({
      margin: props.theme.spacing(0, 0, 0, 'auto'),
      fontSize: 14,
      lineHeight: '24px',
      color: props.theme.palette.interaction?.sub,
    }),
    actions: (props: {theme: Theme}) => ({
      marginLeft: props.theme.spacing(2),
      display: 'flex',
      gap: props.theme.spacing(2),
    }),
  },
};

export default defaultSettings;
