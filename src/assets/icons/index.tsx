import styled from "styled-components";

import ArrowRight from "./arrowright-icon.svg";
import Bell from "./bell-icon.svg";
import Circle from "./circle-icon.svg";
import Clock from "./clock-icon.svg";
import ArrowDown from "./dropdown-icon.svg";
import Inbox from "./inbox-icon.svg";
import Search from "./search-icon.svg";
import Settings from "./settings-icon.svg";
import UserGroup from "./usergroup-icon.svg";
import Mark from "./mark-icon.svg";

import { IconsProps } from "src/types/types.d";

export const ArrowRightIcon = styled.img.attrs({
  src: ArrowRight,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const BellIcon = styled.img.attrs({
  src: Bell,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const CircleIcon = styled.img.attrs({
  src: Circle,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const ClockIcon = styled.img.attrs({
  src: Clock,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const ArrowDownIcon = styled.img.attrs({
  src: ArrowDown,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const InboxIcon = styled.img.attrs({
  src: Inbox,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const SearchIcon = styled.img.attrs({
  src: Search,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const SettingsIcon = styled.img.attrs({
  src: Settings,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const UserGroupIcon = styled.img.attrs({
  src: UserGroup,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;

export const MarkIcon = styled.img.attrs({
  src: Mark,
})<IconsProps>`
  width: ${(props) => props.width && `${props.width}`};
  height: ${(props) => props.height && `${props.height}`};
  margin-top: ${(props) => props.top && `${props.top}`};
  margin-bottom: ${(props) => props.bottom && `${props.bottom}`};
  margin-left: ${(props) => props.left && `${props.left}`};
  margin-right: ${(props) => props.right && `${props.right}`};
`;
