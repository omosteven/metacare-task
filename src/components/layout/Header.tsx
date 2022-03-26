import { Grid } from "@mui/material";
import { useState } from "react";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  BellIcon,
  CircleIcon,
  ClockIcon,
  InboxIcon,
  MarkIcon,
  SettingsIcon,
  UserGroupIcon,
} from "../../assets/icons";

import {
  Card,
  Legend,
  PageHeader,
  PageInnerHeader,
  ScreenControl,
  Text,
  TextField,
} from "../../styles/Styles";

import { ILayoutProps } from "../../types/types.d";

const sidebarItems = [
  {
    title: "Admin",
    icon: <UserGroupIcon />,
    isOpen: false,
    items: [{ text: "Teams", route: "/" }],
  },
  {
    title: "Knowledge Base",
    icon: <MarkIcon />,
    isOpen: false,
    items: [{ text: "Teams", route: "/" }],
  },
  {
    title: "Train SAM",
    icon: <MarkIcon />,
    isOpen: false,
    items: [{ text: "Teams", route: "/" }],
  },
  {
    title: "Agent Inbox",
    icon: <InboxIcon />,
    isOpen: false,
    items: [{ text: "Teams", route: "/" }],
  },
  {
    title: "Help Center",
    icon: <ClockIcon />,
    isOpen: false,
    items: [{ text: "Teams", route: "/" }],
  },
  {
    title: "Analytics",
    icon: <SettingsIcon />,
    isOpen: false,
    items: [
      { text: "Teams", route: "/" },
      { text: "Knowledge Base", route: "/" },
      { text: "Training SAM", route: "/" },
      { text: "Help Center", route: "/" },
    ],
  },
];

const SideView = () => {
  const [sideItems, setSideItems] = useState(sidebarItems);

  const dropDown = (pos: number, curVal: boolean) => {
    // setSideItems([
    //   ...sideItems,
    //   {
    //     ...sideItems[pos],
    //     isOpen: true,
    //   },
    // ]);
    let newArr = [...sideItems];
    newArr[pos].isOpen = !curVal;
    setSideItems(newArr);
  };

  return (
    <>
      <Card
        height="100vh"
        width="262px"
        border="1px solid #ECEBF5"
        style={{ zIndex: 100000000, position: "fixed" }}
      >
        <Card
          left="22px"
          right="22px"
          top="21px"
          border="1px solid #ECEBF5"
          radius="8px"
          height="60px"
          width="221px"
        >
          <Card left="auto" right="auto" width="fit-content" top="8px">
            <Text size="14px" lineHeight="22px" color="#060213">
              Metacare
            </Text>
            <Text size="12px" lineHeight="20px">
              adeyinka@metacare.app
            </Text>
          </Card>
        </Card>

        <Card
          left="22px"
          height="80vh"
          right="22px"
          top="27px"
          overflowX="scroll"
          overflowY="scroll"
        >
          {sideItems.map((item, pos) => (
            <Card key={pos}>
              <Card
                height="25px"
                top="27px"
                width="100%"
                flex={true}
                spaceBetween={true}
              >
                <Card flex={true}>
                  {item?.icon}
                  <Text
                    left="20px"
                    color={item?.isOpen ? "#6837EF" : "#696D8C"}
                  >
                    {item?.title}
                  </Text>
                </Card>
                <Card
                  onClick={() => dropDown(pos, item?.isOpen)}
                  cursor="pointer"
                >
                  {item?.isOpen ? <ArrowDownIcon /> : <ArrowRightIcon />}
                </Card>
              </Card>
              {item?.isOpen && (
                <Card left="18.25px">
                  {item.items.map((inner, key) => (
                    <Text key={key} left="20px" top="10px">
                      {inner.text}
                    </Text>
                  ))}
                </Card>
              )}
            </Card>
          ))}
        </Card>
      </Card>
    </>
  );
};

const Header = (props: ILayoutProps) => {
  // --- Use the Helmet Libary to handle the pageTitle and any meta data manipulations on this header file ----
  return (
    <>
      <PageHeader>
        <PageInnerHeader>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <TextField
                placeholder="Ask us any question                                          &#61442;"
                noBorder={true}
                background="#FAFAFC"
                radius="10px"
                color="#A3A3C2"
                width="441px"
                smWidth="100%"
                xsWidth="100%"
                className="icon-placeholder"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Card
                border="1px solid #ECEBF5"
                width="175px"
                height="54px"
                radius="8px"
                left="auto"
                xsWidth="100%"
              >
                <Card top="11px" left="16px" right="16px">
                  <Grid container spacing={2}>
                    <Grid item lg={5} md={5} sm={5} xs={5}>
                      <Card flex={true} top="8.33%">
                        <BellIcon />
                        <Legend
                          size="16px"
                          left="6px"
                          color="#F25A68"
                          innerText={true}
                        >
                          <span style={{ color: "white" }}>3</span>
                        </Legend>
                      </Card>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2}></Grid>
                    <Grid item lg={5} md={5} sm={5} xs={5}>
                      <Card flex={true} spaceBetween={true}>
                        <CircleIcon />
                        <ArrowDownIcon />
                      </Card>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </PageInnerHeader>
      </PageHeader>

      <ScreenControl lg md>
        <SideView />
      </ScreenControl>
    </>
  );
};

export default Header;
