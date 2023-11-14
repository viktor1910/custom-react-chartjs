import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';
import SquareShape from '../../assets/SquareShape';
import SquareShapeFilled from '../../assets/SquareShapeFilled';

const radioDefaultSettings: {
  defaultProps?: ComponentsProps['MuiCheckbox'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiCheckbox'];
  variants?: ComponentsVariants['MuiCheckbox'];
} = {
  defaultProps: {
    icon: <SquareShape />,
    checkedIcon: <SquareShapeFilled />,
  },
  styleOverrides: {
    root: props => ({
      padding: props.theme.spacing(1),
    }),
  },
};

export default radioDefaultSettings;
