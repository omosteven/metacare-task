import { Grid } from "@mui/material";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, Legend, Text, TextField, TitleText } from "src/styles/Styles";

import { ChartBoxProps, IChartBarProps } from "src/types/types.d";

import { Preloader } from "../utils";

const data = [
  {
    name: "Jan",
    value: 12,
  },
  {
    name: "Feb",
    value: 19,
  },
  {
    name: "Mar",
    value: 35,
  },
  {
    name: "Apr",
    value: 48,
  },
  {
    name: "May",
    value: 19,
  },
  {
    name: "Jun",
    value: 30,
  },
  {
    name: "Jul",
    value: 40,
  },
  {
    name: "Aug",
    value: 35,
  },
];

const ChatBox = (props: ChartBoxProps) => {
  const { value, title } = props;
  return (
    <>
      <Card
        border="1px solid #ECEBF5"
        radius="10px"
        background="#FAFAFA"
        height="116px"
        width="187px"
        mdWidth="100%"
        // left="24px"
        // right="24px"
        left="auto" //would automatically become 24px for desktop
        right="auto"
        xsWidth="100%"
      >
        <Card background="transparent" left="16px" top="30px">
          <TitleText lineHeight="22px" size="14px" color="#696D8C">
            {title}
          </TitleText>
          <Text color="#060213" size="20px" weight="600" lineHeight="32px">
            {value}
          </Text>
        </Card>
      </Card>
    </>
  );
};

const ChartBar = (props: IChartBarProps) => {
  const {
    legendColor,
    chartTitle,
    avgRespTime,
    respTime,
    lastDayPercent,
    fetching,
  } = props;

  return (
    <>
      <Card
        height="100%"
        smHeight="100%"
        xsHeight="100%"
        mdHeight="100%"
        border="1px solid #ECEBF5"
        radius="10px"
        background="white"
        bottom="24px"
      >
        {fetching ? (
          <Preloader rows={5} />
        ) : (
          <Card left="24px" top="30px" right="24px" bottom="24px">
            <Grid container spacing={2}>
              <Grid item lg={9} md={12} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={5} md={6} sm={6} xs={12}>
                    <Card flex={true} spaceBetween={true}>
                      <Card>
                        <TitleText
                          weight="600"
                          size="18px"
                          lineHeight="26px"
                          color="#060213"
                        >
                          {chartTitle}
                        </TitleText>
                      </Card>
                      <Card
                        padding="4px 12px"
                        background="rgba(37, 187, 135, 0.1)"
                        radius="4px"
                        width="70px"
                        height="28px"
                        left="16px"
                      >
                        <Text>{lastDayPercent}</Text>
                      </Card>
                    </Card>
                  </Grid>
                  <Grid item lg={7} md={6} sm={6} xs={12}>
                    <Card
                      width="fit-content"
                      flex={true}
                      spaceBetween={true}
                      left="auto"
                      xsWidth="100%"
                    >
                      <Card
                        width="124px"
                        top="2px"
                        height="38px"
                        xsWidth="fit-content"
                        smWidth="fit-content"
                        flex={true}
                        //   right="auto"
                      >
                        <Legend
                          color={legendColor ? legendColor : "#F05D23"}
                          top="6px"
                          right="6px"
                        />
                        <Text
                          size="14px"
                          lineHeight="22px"
                          weight="500"
                          color="#060213"
                          center={true}
                        >
                          High Priority
                        </Text>
                      </Card>
                      <Card width="fit-content" left="16px">
                        <TextField
                          type="date"
                          border="#E1E1EB"
                          radius="8px"
                          width="148px"
                          height="38px"
                          xsWidth="100%"
                          color="#060213"
                        />
                      </Card>
                    </Card>
                  </Grid>

                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card height="216px" width="100%">
                      <ResponsiveContainer width={"100%"} height="100%">
                        <LineChart
                          data={data}
                          margin={{ left: -32, bottom: -8, right: 5 }}
                        >
                          <XAxis dataKey="name" stroke="#696D8C" />
                          <YAxis stroke="#696D8C" />
                          <CartesianGrid strokeDasharray="1 3" />
                          <Tooltip />
                          <Line
                            type="linear"
                            dataKey="value"
                            stroke={legendColor}
                            fill={"white"}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item lg={1} md={4} sm={12} xs={12}></Grid> */}
              <Grid item lg={3} md={12} sm={12} xs={12}>
                <Card
                  // top="30px"
                  // width="235px"
                  width="100%"
                  xsWidth="100%"
                  smWidth="100%"
                  mdWidth="100%"
                  // left="auto"
                  // right="auto"
                >
                  <Grid container spacing={2}>
                    <Grid item lg={12} md={6} xs={12} sm={6}>
                      <ChatBox
                        title="Average Response Time"
                        value={avgRespTime}
                      />
                    </Grid>
                    <Grid item lg={12} md={6} xs={12} sm={6}>
                      <ChatBox title="Response Time" value={respTime} />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Card>
        )}
      </Card>
    </>
  );
};

export default ChartBar;
