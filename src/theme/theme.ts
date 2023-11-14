import {createTheme} from '@mui/material/styles';

import palette from './__elements/palette';
import cssBaseLine from './__elements/cssBaseLine';
import {
  typographyConfiguration,
  typographyDefaultSettings,
} from './__elements/typography';
import shadows from './__elements/shadows';
import buttonDefaultSettings from './__elements/button';
import iconButtonDefaultSettings from './__elements/iconButton';
import switchDefaultSettings from './__elements/switch';
import radioDefaultSettings from './__elements/radio';
import avatarDefaultSettings from './__elements/avatar';
import backdropDefaultSettings from './__elements/backdrop';
import tabsDefaultSettings from './__elements/tabs';
import tabDefaultSettings from './__elements/tab';
import tabPanelDefaultSettings from './__elements/tabPanel';
import chipDefaultSettings from './__elements/chip';
import breadcrumbsDefaultSettings from './__elements/breadcrumbs';
import outlinedInputDefaultSettings from './__elements/outlinedInput';
import menuDefaultSettings from './__elements/menu';
import menuItemDefaultSettings from './__elements/menuItem';
import inputLabelDefaultSettings from './__elements/inputLabel';
import formHelperTextDefaultSettings from './__elements/formHelperText';
import textFieldDefaultSettings from './__elements/textField';
import selectDefaultSettings from './__elements/select';
import tablePaginationDefaultSettings from './__elements/tablePagination';
import alertDefaultSetting from './__elements/alert';
import avatarGroupDefaultSetting from './__elements/avatarGroup';
import dialogDefaultSetting from './__elements/dialog';
import checkboxDefaultSetting from './__elements/checkbox';
import {
  accordionSettings,
  accordionSummarySettings,
  accordionDetailsSettings,
} from './__elements/accordion';
import tooltipDefaultSetting from './__elements/tooltip';
import autocompleteDefaultSetting from './__elements/autocomplete';

const theme = createTheme({
  palette,
  typography: typographyConfiguration,
  shadows,
  components: {
    MuiCssBaseline: cssBaseLine,
    MuiTypography: typographyDefaultSettings,
    MuiButton: buttonDefaultSettings,
    MuiIconButton: iconButtonDefaultSettings,
    MuiSwitch: switchDefaultSettings,
    MuiRadio: radioDefaultSettings,
    MuiAvatar: avatarDefaultSettings,
    MuiBackdrop: backdropDefaultSettings,
    MuiTabs: tabsDefaultSettings,
    MuiTab: tabDefaultSettings,
    MuiTabPanel: tabPanelDefaultSettings,
    MuiChip: chipDefaultSettings,
    MuiBreadcrumbs: breadcrumbsDefaultSettings,
    MuiOutlinedInput: outlinedInputDefaultSettings,
    MuiMenu: menuDefaultSettings,
    MuiMenuItem: menuItemDefaultSettings,
    MuiInputLabel: inputLabelDefaultSettings,
    MuiFormHelperText: formHelperTextDefaultSettings,
    MuiTextField: textFieldDefaultSettings,
    MuiSelect: selectDefaultSettings,
    MuiTablePagination: tablePaginationDefaultSettings,
    MuiAlert: alertDefaultSetting,
    MuiAvatarGroup: avatarGroupDefaultSetting,
    MuiDialog: dialogDefaultSetting,
    MuiCheckbox: checkboxDefaultSetting,
    MuiAccordion: accordionSettings,
    MuiAccordionSummary: accordionSummarySettings,
    MuiAccordionDetails: accordionDetailsSettings,
    MuiTooltip: tooltipDefaultSetting,
    MuiAutocomplete: autocompleteDefaultSetting,
  },
});

export default theme;
