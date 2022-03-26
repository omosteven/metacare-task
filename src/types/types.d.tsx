export interface ILayoutProps {
  pageTitle: string;
}

export interface IChartBarProps {
  legendColor?: string;
  chartTitle: string;
  avgRespTime: string;
  respTime: string;
  lastDayPercent: string;
  fetching?: boolean;
}

export interface ChartBoxProps {
  value: string;
  title: string;
}

// --- Icon Types
export interface IconsProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  height?: string;
}

// --- Styles Types ---
export interface ICardProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width?: string;
  height?: string;
  color?: string;
  background?: string;
  center?: boolean;
  radius?: string;
  border?: string;

  shadow?: boolean;
  shadowAlt?: string;
  flex?: boolean;
  bgImg?: string;
  bgSize?: string;
  padding?: string;

  verticalCenter?: boolean;
  spaceBetween?: boolean;
  flexEnd?: boolean;

  overflowX?: string;
  overflowY?: string;
  animateZoom?: string;

  hideOnMobile?: boolean;
  widthResponsive?: boolean;

  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;

  xsHeight?: string;
  smHeight?: string;
  mdHeight?: string;
  lgHeight?: string;
  cursor?: string;

  animateOpacity?: boolean;
}

export interface ITextProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  mobileSize?: string;
  position?: string;
  heavy?: boolean;
  lineHeight?: string;
  mobilelineHeight?: string;
  transform?: string;
  fontFamily?: string;
  cursor?: boolean;
  weight?: string;
}

export interface ILinkProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  position?: string;
  heavy?: boolean;
  lineHeight?: string;
  transform?: string;
  fontFamily?: string;
  noUnderline?: boolean;
  inline?: boolean;
}

export interface IDividerProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  size?: string;
  vertical?: boolean;
}

export interface ILegendProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  size?: string;
  innerText?: boolean;
}

export interface IInputProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  size?: string;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  cursor?: boolean;
  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;
  width?: string;
  height?: string;
  heavy?: boolean;
}

export interface IScreenControlProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  lineHeight?: string;
  transform?: string;
  fontFamily?: string;
  border?: string;
  radius?: string;
  noBorder?: boolean;
  heavy?: boolean;
  width?: string;
  height?: string;
  fullWidth?: boolean;
  lg?: boolean;
  md?: boolean;
  all?: boolean;
  sm?: boolean;
  xs?: boolean;
}

export interface IMainSectionProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  background?: string;
  size?: string;
  width?: string;
  height?: string;
  verticalCenter?: boolean;
}

export interface IModalCardProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color?: string;
  background?: string;
  center?: boolean;
  size?: string;
  radius?: string;
  height?: string;
  shadowAlt?: string;
  shadow?: boolean;
  flex?: boolean;
  bgImg?: string;
  bgSize?: string;
  padding?: string;
  verticalCenter?: boolean;
  spaceBetween?: boolean;
  flexEnd?: boolean;
  borderColor?: string;
  overflowX?: string;
  overflowY?: string;
}

export interface IImageProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  background?: string;
  center?: boolean;
  position?: string;
  cursor?: boolean;
  width?: string;
  height?: string;
  shake?: boolean;
  bounceUpAndDown?: boolean;
}
