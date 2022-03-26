import { useEffect, useState } from "react";
import { ChartBar, Dashbar, DashFilter } from "src/components/dashboard";
import Layout from "src/components/layout";

import { MainSection } from "src/styles/Styles";

const charts = [
  {
    legendColor: "#F05D23",
    chartTitle: "Average response Time",
    avgRespTime: "30 Mins",
    respTime: "1 Hour 30 Mins",
    lastDayPercent: "+4.14%",
  },
  {
    legendColor: "#3E68FF",
    chartTitle: "Replies per resolution",
    avgRespTime: "30 Mins",
    respTime: "1 Hour 30 Mins",
    lastDayPercent: "+4.14%",
  },
  {
    legendColor: "#FB6491",
    chartTitle: "Average resolution time",
    avgRespTime: "30 Mins",
    respTime: "1 Hour 30 Mins",
    lastDayPercent: "+4.14%",
  },
  {
    legendColor: "#07C9E2",
    chartTitle: "First contact resolution rate",
    avgRespTime: "30 Mins",
    respTime: "1 Hour 30 Mins",
    lastDayPercent: "+4.14%",
  },
];

const DashboardPage = () => {
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    // --- Make API call here ----
    setTimeout(() => {
      setFetching(false);
    }, 8000);
  }, []);
  return (
    <>
      <Layout pageTitle="Welcome | Dashboard">
        <Dashbar />
        <MainSection>
          <DashFilter />
          {charts.map((chartData, pos) => (
            <ChartBar {...chartData} key={pos} fetching={fetching} />
          ))}
        </MainSection>
      </Layout>
    </>
  );
};

export default DashboardPage;
