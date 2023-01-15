import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'

const vars: Partial<GlobalTheme['common']> = {
  fontFamily: "'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif !important",
  primaryColor: '#2681ff',
  primaryColorHover: '#409fff',
  primaryColorPressed: '#2681ff',

  errorColor: '#f15532',
  warningColor: '#f27a24',
  infoColor: '#90a0ae',
  successColor: '#50e3c2',

  textColor1: '#ffffff',

  borderColor: '#3a4659',
  borderRadius: '0',
  borderRadiusSmall: '0',

  boxShadow1: 'none',
  boxShadow2: 'none',
  boxShadow3: 'none',
}

const vars2 = {
  darkColor: '#262c33',
  guiPrimaryColor: '#2483ff',
  guiComponentBgColor: '#262c33',
  guiComponentBgColorDark: '#262c32',
  guiComponentBgColorHover: '#303640',
  guiComponentBgColorActive: '#262b33',
  guiComponentBgColorDisabled: '#13161a',
  guiFontColor: '#a1aeb3',
  guiFontColorDescription: '#5c6366',
  borderColor: '#0b0c0d',
  border: '1px solid #0b0c0d',
  borderPrimary: '1px solid #2681ff',
  guiBgColorDark: '#111417',
  bgColor1: '#0b0c0d',
  bgColor2: '#1d262e',
}

const themeOverrides: GlobalThemeOverrides = {
  common: {
    ...vars,
  },
  Button: { // small 和 medium 一样大
    iconSizeTiny: '12px',

    heightTiny: '26px',
    heightSmall: '32px',
    heightMedium: '32px',

    paddingTiny: '0 15px',
    paddingSmall: '0 24px',
    paddingMedium: '0 24px',

    color: '#0000',
    colorHover: vars.primaryColorHover,
    colorPressed: vars.primaryColorPressed,
    colorFocus: vars.primaryColor,

    colorFocusPrimary: vars.primaryColor,

    border: `1px solid ${vars.primaryColor}`,
    borderHover: `1px solid ${vars.primaryColorHover}`,
    borderPressed: `1px solid ${vars.primaryColorPressed}`,
    borderFocus: `1px solid ${vars.primaryColor}`,

    borderFocusPrimary: `1px solid ${vars.primaryColor}`,

    textColor: vars.primaryColor,
    textColorHover: '#fff',
    textColorPressed: '#fff',
    textColorFocus: '#fff',

    textColorGhost: vars.primaryColor,
    textColorGhostHover: '#fff',
    textColorGhostPressed: '#fff',
    textColorGhostFocus: vars.primaryColor,

    colorDisabled: '#282f3a',
    textColorDisabled: '#90a0ae',
    borderDisabled: '1px solid #0000',
  },
  Message: {
    minWidth: '380px',
    padding: '15px 15px 15px 20px',
    fontSize: '12px',
    iconSize: '16px',
    borderRadius: '0',
    textColorError: '#fff',
    textColorSuccess: '#fff',
    textColorWarning: '#fff',
    colorError: '#5d2b3e',
    colorSuccess: '#1b3964',
    colorWarning: '#593c27',
    closeMargin: '0',
    closeIconColorError: '#fff',
    closeIconColorHoverError: vars.infoColor,
    closeIconColorSuccess: '#fff',
    closeIconColorHoverSuccess: vars.infoColor,
    closeIconColorWarning: '#fff',
    closeIconColorHoverWarning: vars.infoColor,
  },
  Dialog: {
    color: '#303640',
    padding: '16px 20px',
    textColor: '#fff',
    closeIconColor: vars.primaryColor,
    closeIconColorHover: vars.primaryColor,
    closeIconColorPressed: vars.primaryColor,
    closeColorHover: '#0000',
    closeColorPressed: '#0000',
    closeMargin: '16px 20px 0 0',
    iconSize: '65px',
    iconColor: '#ff4f43',
    iconMargin: '0 0 10px 0',
    contentMargin: '10px -20px 0',
  },
  Dropdown: {
    fontSizeMedium: '12px',
    padding: '0',
    borderRadius: '1px',
    color: vars2.darkColor,
    prefixColor: '#fff',
    optionColorHover: '#1a1b1d',
    optionTextColor: '#fff',
    optionTextColorHover: '#fff',
    optionHeightMedium: '30px',
    optionIconSizeMedium: '12px',
    optionIconPrefixWidthMedium: '12px',
    dividerColor: '#1a1b1d',
  },
  Switch: {
    buttonWidthMedium: '10px',
    buttonHeightMedium: '10px',
    buttonWidthPressedMedium: '14px',
    railWidthMedium: '26px',
    railHeightMedium: '12px',

    buttonWidthSmall: '6px',
    buttonHeightSmall: '6px',
    buttonWidthPressedSmall: '8px',
    railWidthSmall: '16px',
    railHeightSmall: '8px',

    railColor: '#0b0c0d',
    railColorActive: vars2.guiPrimaryColor,
    boxShadowFocus: 'none',
  },
  Tooltip: {
    padding: '5px',
    color: vars.primaryColor,
    boxShadow: 'none',
    peers: {
      Popover: {
        fontSize: '12px',
      },
    },
  },
  Slider: {
    handleSize: '9px',
    railHeight: '2px',
    railColor: '#bcc9d4',
  },
  Checkbox: {
    sizeMedium: '14px',
    fontSizeMedium: '12px',
    textColor: vars.textColor1,
    color: '#0000',
    colorChecked: '#0000',
    checkMarkColor: vars.primaryColor,
    boxShadowFocus: 'none',
  },
  Radio: {
    fontSizeSmall: '12px',
    buttonHeightSmall: '28px',
    buttonTextColor: vars2.guiFontColor,
    buttonTextColorActive: '#fff',
    buttonColor: vars2.darkColor,
    buttonColorActive: vars2.guiPrimaryColor,
    buttonBoxShadow: 'none',
    buttonBoxShadowFocus: 'none',
    buttonBoxShadowHover: 'none',
    buttonBorderColor: vars2.borderColor,
    color: '#0000',
    textColor: vars.textColor1,
    boxShadowFocus: 'var(--n-box-shadow-active)',
  },
  Input: {
    fontSizeSmall: '12px',
    textColor: vars.textColor1,
    color: vars2.guiComponentBgColor,
    colorFocus: vars2.guiComponentBgColor,
    border: vars2.border,
    borderHover: vars2.borderPrimary,
    borderFocus: vars2.borderPrimary,
    boxShadowFocus: 'none',
    iconColor: vars.textColor1,
    suffixTextColor: vars2.guiFontColorDescription,
    paddingSmall: '0 8px',
    groupLabelColor: vars2.guiComponentBgColor,
    groupLabelTextColor: vars.textColor1,
    groupLabelBorder: vars2.border,
    heightMedium: '32px',
  },
  ColorPicker: {
    border: vars2.border,
    color: vars2.guiComponentBgColor,
    panelFontSize: '12px',
    textColor: vars.textColor1,
    heightMedium: '32px',
  },
  Upload: {
    draggerBorder: vars2.border,
    draggerBorderHover: vars2.borderPrimary,
  },
  Drawer: {
    color: '#1d2126',
    bodyPadding: '0 20px 80px 20px',
    textColor: vars.primaryColor,
    titleFontWeight: 'normal',
    headerBorderBottom: '1px solid rgba(255, 255, 255, 0.15)',
    closeIconColor: vars.primaryColor,
    closeIconColorHover: vars.primaryColor,
    closeIconColorPressed: vars.primaryColor,
    closeColorHover: '#0000',
    closeColorPressed: '#0000',
  },
  Select: {
    peers: {
      InternalSelection: {
        fontSizeSmall: '12px',
        textColor: vars.textColor1,
        arrowColor: vars.textColor1,
        caretColor: vars.primaryColor,
        color: vars2.guiComponentBgColor,
        colorActive: vars2.guiComponentBgColor,
        colorDisabled: vars2.guiComponentBgColor,
        border: vars2.border,
        borderHover: vars2.borderPrimary,
        borderActive: vars2.borderPrimary,
        borderFocus: vars2.borderPrimary,
        boxShadowFocus: 'none',
        boxShadowActive: 'none',
        paddingSingle: '0 24px 0 8px',
        placeholderColor: '#c0c4cc',
        heightMedium: '32px',
      },
      InternalSelectMenu: {
        optionFontSizeSmall: '12px',
        optionFontSizeMedium: '12px',
        color: '#1d2126',
        optionColorActive: '#1b3964',
        optionColorPending: '#1b3964',
        optionColorActivePending: '#1b3964',
        optionTextColor: vars2.guiFontColor,
        optionTextColorActive: '#fff',
        optionHeightSmall: '28px',
        optionHeightMedium: '28px',
      },
    },
  },
  Collapse: {
    fontSize: '12px',
    textColor: vars.textColor1,
    titleTextColor: '#fff',
    arrowColor: vars.textColor1,
    dividerColor: 'rgba(52, 52, 52, 0)',
  },
  Card: {
    borderColor: vars.borderColor,
    textColor: vars.textColor1,
    color: vars2.bgColor2,
    titleTextColor: vars.primaryColor,
  },
  Scrollbar: {
    color: '#434b55',
    colorHover: '#5a6572',
  },
  Tag: {
    color: vars2.darkColor,
    border: vars2.border,
    textColor: vars.textColor1,
  },
  Tabs: {
    panePaddingMedium: '0',
    tabGapMediumCard: '0',
    tabBorderColor: '#0000',
    tabTextColorHoverCard: vars.primaryColorHover,
    tabTextColorActiveCard: vars.primaryColorHover,
  },
  PageHeader: {
    backColor: '#fff',
  },
  Cascader: {
    menuColor: '#1d2126',
    menuDividerColor: vars2.borderColor,
    menuHeight: 'calc(var(--n-option-height) * 7.6)',
    optionTextColor: vars2.guiFontColor,
    optionColorHover: '#1b3964',
    peers: {
      InternalSelection: {
        textColor: vars.textColor1,
        arrowColor: vars.textColor1,
        caretColor: vars.primaryColor,
        color: vars2.guiComponentBgColor,
        colorActive: vars2.guiComponentBgColor,
        colorDisabled: vars2.guiComponentBgColor,
        border: vars2.border,
        borderHover: vars2.borderPrimary,
        borderActive: vars2.borderPrimary,
        borderFocus: vars2.borderPrimary,
        boxShadowFocus: 'none',
        boxShadowActive: 'none',
        placeholderColor: '#c0c4cc',
      },
    },
  },
}

export {
  themeOverrides,
}
