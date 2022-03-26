import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import {
  ICardProps,
  ITextProps,
  IInputProps,
  IDividerProps,
  ILegendProps,
  ILinkProps,
  IMainSectionProps,
  IImageProps,
  IScreenControlProps,
  IModalCardProps,
} from "src/types/types.d";

// --- Define Our Constant Values Here ---
export const gridCut = 100 / 12;

const primaryColor = "#25BB87";

const secondaryColor = "#696D8C";

const whiteColor = "#FFFFFF";

const darkColor = "#060213";

// --- Animation Parts Here ----
const animateOnOpacity = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const animateOnShake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const animateOnBounce = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-80px); }
  100% { transform: translateY(0); }
`;

export const PageTransition = styled.div`
  animation-name: ${animateOnOpacity};
  animation-duration: 2s;
  @media screen and (max-width: 720px) {
    animation-name: ${animateOnOpacity};
  }
`;

// --- End of Animation Parts Here ---

// --- Custom Pick and Use Components ---

export const Grid = styled("div")<{
  flex?: boolean;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  spacing?: number;
  grid?: boolean;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  cardWidth?: string;
}>`
  display: ${(props) => (props.flex ? "flex" : "block")};
  display: ${(props) => props.grid && "inline-grid"};
  grid-template-columns: ${(props) =>
    props.grid ? "repeat(auto-fit, minmax(300px, 1fr))" : "none"};
  width: ${(props) => (props.lg ? `${props.lg * gridCut}%` : "100%")};
  width: ${(props) => props.cardWidth && `${props.cardWidth}`};
  column-gap: ${(props) => (props.spacing ? `${props.spacing}em` : "0")};
  justify-content: ${(props) => (props.spacing ? "space-between" : "none")};

  margin-top: ${(props) => (props.top ? `${props.top}` : "0em")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0em")};
  margin-left: ${(props) => (props.left ? "auto" : "0em")};
  margin-right: ${(props) => (props.right ? "auto" : "0em")};

  @media screen and (min-width: 992px) {
    width: ${(props) => (props.md ? `${props.md * gridCut}%` : "100%")};
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.sm ? `${props.sm * gridCut}%` : "100%")};
  }
  @media screen and (max-width: 767px) {
    width: ${(props) => (props.xs ? `${props.xs * gridCut}%` : "100%")};
    flex-direction: ${(props) =>
      props.xs ? props?.xs > 12 && "column" : "row"};
  }

  //   display:block;
  //   height:10em;
  //   width:10em;
`;

export const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 5em;
  top: 0em;
  z-index: 100000000;
  background: white;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const PageInnerHeader = styled.header`
  z-index: 100000000;
  margin-left: 302px;
  margin-right: 56px;
  margin-top: 12px;
  @media screen and (max-width: 960px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const PageFooter = styled.footer`
  width: 100%;
  z-index: 1000000;
  background: linear-gradient(98.32deg, #3cc8e7 0%, #03748d 99.26%);
  // z-index: 1000;
  display: block;
  position: absolute;
`;

export const Button = styled("button")<{
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
  size?: string;
  border?: string;
  heavy?: boolean;
}>`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "44px")};
  color: ${(props) => (props.color ? `${props.color}` : whiteColor)};
  background: ${(props) =>
    props.background ? `${props.background}` : primaryColor};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.center ? "auto" : "0px")};
  margin-right: ${(props) => (props.center ? "auto" : "0px")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "8px")};
  box-sizing: border-box;
  border: none;
  display: block;
  font-size: ${(props) => props.size && `${props.size}`};
  border: ${(props) => props.border && `${props.border}`};
  font-weight: ${(props) => props.heavy && "bold"};
  margin-left: ${(props) => props.left && props.left};
  margin-right: ${(props) => props.right && props.right};
  cursor: pointer;
  outline: none;
  transition: 0.5s opacity;
  &:hover {
    opacity: 0.5;
  }
`;

export const Card = styled("div")<ICardProps>`
  width: ${(props) => (props.width ? `${props.width}` : "initial")};
  height: ${(props) => (props.height ? `${props.height}` : "fit-content")};
  background: ${(props) =>
    props.background ? `${props.background}` : "white"};
  box-shadow: ${(props) =>
    props.shadow ? `0px 8px 15px rgba(0, 0, 0, 0.1)` : "none"};
  box-shadow: ${(props) => props.shadowAlt && `${props.shadowAlt}`};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.center ? "center" : "none")};
  text-align: ${(props) => (props.center ? "center" : "none")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  background-image: ${(props) => props.bgImg && `${props.bgImg}`};
  background-size: ${(props) => props.bgSize && `${props.bgSize}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0.1px")};
  text-align: ${(props) => props.center && "center"};
  align-items: ${(props) => (props.verticalCenter ? "center" : "none")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "none"};

  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};

  border-radius: ${(props) => (props.radius ? `${props.radius}` : "none")};

  // --- For right align on display flex ----
  justify-content: ${(props) => props.flexEnd && "flex-end"};
  display: ${(props) => props.flexEnd && "flex"};

  border: ${(props) => (props.border ? `${props.border}` : "none")};
  cursor: ${(props) => (props.cursor ? `${props.cursor}` : "initial")};

  overflowx: ${(props) => props.overflowX && props.overflowX};
  overflow-x: ${(props) => props.overflowY && props.overflowY};

  transition: 0.5s zoom 0.5s background;
  &:hover {
    zoom: ${(props) => props.animateZoom && 1.1};
  }

  animation-name: ${(props) => props.animateOpacity && animateOnOpacity};
  animation-duration: ${(props) => props.animateOpacity && "2s"};
  animation-timing-function: ease;
  animation-iteration-count: infinite;

  // --- Responsive Parts ----
  margin-left: ${(props) => props.widthResponsive && "auto"};
  margin-right: ${(props) => props.widthResponsive && "auto"};
  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  height: ${(props) => props.lgHeight && `${props.lgHeight}`};
  @media screen and (max-width: 1200px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
    height: ${(props) => props.mdHeight && `${props.mdHeight}`};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
    height: ${(props) => props.smHeight && `${props.smHeight}`};
  }
  @media screen and (max-width: 481px) {
    width: ${(props) => props.xsWidth && `${props.xsWidth}`};
    height: ${(props) => props.xsHeight && `${props.xsHeight}`};
  }

  //   ----- To control screen size ----
  @media screen and (max-width: 992px) {
    display: ${(props) => props?.hideOnMobile && "none"};
  }
`;

export const TitleText = styled("h3")<ITextProps>`
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "20px")};
  line-height: 45px;
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "normal")};
  font-weight: ${(props) => props.weight && `${props.weight}`};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  line-height: ${(props) => props.lineHeight && `${props.lineHeight}`};
  text-transform: ${(props) => props.transform && `${props.transform}`};
  // --- For centralization ---
  text-align: ${(props) => props.center && "center"};
  font-family: ${(props) => props?.fontFamily && props?.fontFamily};
  font-style: normal;
  cursor: ${(props) => props.cursor && "pointer"};
  @media screen and (max-width: 769px) {
    font-size: ${(props) => props.mobileSize && `${props.mobileSize}`};
    line-height: ${(props) =>
      props.mobilelineHeight && `${props.mobilelineHeight}`};
  }
`;

export const Text = styled("p")<ITextProps>`
  color: ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "400")};
  font-weight: ${(props) => props.weight && `${props.weight}`};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}` : "24px"};
  text-transform: ${(props) => props.transform && `${props.transform}`};
  // --- For centralization ---
  text-align: ${(props) => props.center && "center"};
  font-family: ${(props) => props?.fontFamily && props?.fontFamily};
  font-style: normal;
  cursor: ${(props) => props.cursor && "pointer"};
`;

// ---to be updated later --
export const LinkText = styled(Link)<ILinkProps>`
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  font-size: ${(props) => (props.size ? `${props.size}` : "14px")};
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  font-weight: ${(props) => (props.heavy ? `bold` : "normal")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  line-height: ${(props) => props.lineHeight && `${props.lineHeight}`};
  text-decoration: ${(props) => props.noUnderline && "none"};

  // --- For centralization ---
  text-align: ${(props) => props.center && "center"};
  margin-left: ${(props) => props.center && "auto"};
  margin-right: ${(props) => props.center && "auto"};
  font-style: normal;
  display: ${(props) => !props.inline && "block"};
  font-family: ${(props) => props?.fontFamily && props?.fontFamily};
  width: fit-content;
  cursor: pointer;
`;

export const Avatar = styled.div`
  background: white;
  border-radius: 50%;
  width: 4em;
  height: 4em;
`;

export const Divider = styled("hr")<IDividerProps>`
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  transform: ${(props) => props.vertical && "rotate(-90deg)"};
  border: ${(props) => props.vertical && "1px"} solid
    ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  width: ${(props) => props.vertical && `${props.size}`};
`;

export const Legend = styled("div")<ILegendProps>`
  width: ${(props) => (props.size ? `${props.size}` : "10px")};
  height: ${(props) => (props.size ? `${props.size}` : "10px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  background: ${(props) =>
    props.color ? `${props.color}` : `${secondaryColor}`};
  border-radius: 2px;
  display: ${(props) => props.innerText && "flex"};
  align-items: ${(props) => props.innerText && "center"};
  align-self: ${(props) => props.innerText && "center"};
  justify-content: ${(props) => props.innerText && "center"};
`;

export const TextField = styled("input")<IInputProps>`
  box-sizing: border-box;
  border-radius: ${(props) => (props.radius ? props?.radius : "5px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : secondaryColor)};
  border: ${(props) => props.noBorder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "48px")};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  outline: none;
  font-style: normal;
  line-height: 32px;
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  // &::placeholder {
  //   padding: 16px 15px;
  // };
  padding: 16px 15px;
  transition: 0.5s;

  &:hover {
    border-bottom: 1px solid ${secondaryColor};
  }

  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 1200px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
  @media screen and (max-width: 481px) {
    width: ${(props) => props.xsWidth && `${props.xsWidth}`};
  }
`;

export const TextAreaField = styled("textarea")<IInputProps>`
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : primaryColor)};
  border: ${(props) => props.noBorder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "10em")};
  outline: none;
  font-style: normal;
  // font-weight: 600;
  line-height: 32px;
  color: ${darkColor};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  &::placeholder {
    padding: 16px 15px;
  }

  transition: 0.5s;
  &:hover {
    border-bottom: 1px solid ${secondaryColor};
  }

  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 1200px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
  @media screen and (max-width: 481px) {
    width: ${(props) => props.xsWidth && `${props.xsWidth}`};
  }
`;

export const SelectField = styled("select")<IInputProps>`
  box-sizing: border-box;
  border-radius: ${(props) => (props.radius ? props?.radius : "5px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "1px")} solid
    ${(props) => (props.border ? `${props.border}` : secondaryColor)};
  border: ${(props) => props.noBorder && "none"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "48px")};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  outline: none;
  font-style: normal;
  line-height: 32px;
  padding: 0.5px 0.5px;
  font-weight: ${(props) => (props.heavy ? "bold" : "normal")};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "3.5em")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  outline: none;

  width: ${(props) => props.lgWidth && `${props.lgWidth}`};
  @media screen and (max-width: 1200px) {
    width: ${(props) => props.mdWidth && `${props.mdWidth}`};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.smWidth && `${props.smWidth}`};
  }
  @media screen and (max-width: 481px) {
    width: ${(props) => props.xsWidth && `${props.xsWidth}`};
  }
`;

export const Option = styled("option")<IInputProps>`
  border: 1px solid #cbd2d9;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  border: ${(props) => (props.size ? `${props.size}` : "16px")} solid
    ${(props) => (props.color ? `${props.color}` : secondaryColor)};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "3px")};
  outline: none;
`;

// --- Screen width display control ---
export const ScreenControl = styled("div")<IScreenControlProps>`
  display: none;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  display: ${(props) => props.all && "initial"};

  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};

  display: ${(props) => props.lg && "initial"};
  @media screen and (max-width: 1200px) {
    display: none;
    display: ${(props) => props.md && "initial"};
  }
  @media screen and (max-width: 960px) {
    display: none;
    display: ${(props) => props.sm && "initial"};
  }
  @media screen and (max-width: 600px) {
    display: none;
    display: ${(props) => props.xs && "initial"};
  }
`;

export const Main = styled("main")<{
  top?: string;
  background?: string;
  fontFamily?: string;
}>`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  margin-top: ${(props) => (props?.top ? props?.top : "78px")};
  background: ${(props) =>
    props?.background ? props?.background : whiteColor};
  position: absolute;
  z-index: 0;
  margin-top: 78px;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const SearchField = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
  background: ${whiteColor};
  padding: 0.5px 1px;
  border-radius: 0.5px;
  @media screen and (max-width: 992px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const MainSection = styled("section")<IMainSectionProps>`
  width: ${(props) => props.width && `${props.width}`};

  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
  display: ${(props) => props.verticalCenter && "flex"};
  align-items: ${(props) => props.verticalCenter && "center"};
  background: ${(props) => props.background && props.background};
  height: 100%;
  height: ${(props) => props.height && props.height};

  margin-left: 302px;
  margin-right: 56px;

  @media screen and (max-width: 960px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const ModalCard = styled("div")<IModalCardProps>`
  height: ${(props) => (props.height ? `${props.height}` : "fit-content")};
  background: ${(props) =>
    props.background ? `${props.background}` : whiteColor};
  box-shadow: ${(props) =>
    props.shadow ? `0px 8px 15px rgba(0, 0, 0, 0.1)` : "none"};
  box-shadow: ${(props) => props.shadowAlt && `${props.shadowAlt}`};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.center ? "center" : "none")};
  text-align: ${(props) => (props.center ? "center" : "none")};
  border-radius: ${(props) => (props.radius ? `${props.radius}` : "0px")};
  background-image: ${(props) => props.bgImg && `${props.bgImg}`};
  background-size: ${(props) => props.bgSize && `${props.bgSize}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : "0.1px")};
  text-align: ${(props) => props.center && "center"};
  align-items: ${(props) => (props.verticalCenter ? "center" : "none")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "none"};

  border-radius: ${(props) => (props.radius ? `${props.radius}` : "none")};

  // --- For right align on display flex ----
  justify-content: ${(props) => props.flexEnd && "flex-end"};
  display: ${(props) => props.flexEnd && "flex"};

  border: ${(props) => (props.borderColor ? `${props.borderColor}` : "none")};

  overflowx: ${(props) => props.overflowX && props.overflowX};
  overflow: ${(props) => props.overflowY && props.overflowY};
  // --- Responsive Parts ----
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  position: fixed;
  top: 50%;
  left: 50%;
  // max-height:100%;
  overflow: scroll;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 992px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 481px) {
    width: 90%;
  }
`;

export const Image = styled("img")<IImageProps>`
  color: ${(props) => (props.color ? `${props.color}` : darkColor)};
  line-height: 45px;
  text-align: ${(props) => (props.position ? `${props.position}` : "left")};
  margin-top: ${(props) => (props.top ? `${props.top}` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}` : "0px")};
  margin-left: ${(props) => props.center && "auto"};
  margin-right: ${(props) => props.center && "auto"};
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "100%")};
  font-style: normal;
  cursor: ${(props) => props.cursor && "pointer"};

  animation-name: ${(props) => props.bounceUpAndDown && animateOnBounce};
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  &:hover {
    animation: ${animateOnShake};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
`;
