import { accordionClasses, accordionSummaryClasses } from '@mui/material';
import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

export const accordionSettings: {
  defaultProps?: ComponentsProps['MuiAccordion'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAccordion'];
  variants?: ComponentsVariants['MuiAccordion'];
} = {
  styleOverrides: {
    root: {
      boxShadow: 'none',
      [`&.${accordionClasses.expanded}`]: {
        margin: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
  },
};

export const accordionSummarySettings: {
  defaultProps?: ComponentsProps['MuiAccordionSummary'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAccordionSummary'];
  variants?: ComponentsVariants['MuiAccordionSummary'];
} = {
  styleOverrides: {
    root: props => ({
      padding: props.theme.spacing(2, 3),
      minHeight: 0,
      [`&.${accordionSummaryClasses.expanded}`]: {
        minHeight: 0,
      },
    }),
    content: {
      margin: 0,
      [`&.${accordionSummaryClasses.expanded}`]: {
        margin: 0,
      },
    },
    expandIconWrapper: props => ({
      [`&.${accordionSummaryClasses.expanded}`]: {
        color: props.theme.palette.interaction?.danger,
      },
    }),
  },
};

export const accordionDetailsSettings: {
  defaultProps?: ComponentsProps['MuiAccordionDetails'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAccordionDetails'];
  variants?: ComponentsVariants['MuiAccordionDetails'];
} = {
  styleOverrides: {
    root: props => ({
      padding: 0,
      backgroundColor: props.theme.palette.interaction?.placeholder,
    }),
  },
};
