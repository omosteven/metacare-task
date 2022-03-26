import { Card, Divider, MainSection, Text } from "src/styles/Styles";
// import { Preloader } from "../utils";
// import { Preloader } from "../utils";

const barItems = [
  { text: "Efficiency", current: true },
  { text: "Volume", current: false },
  { text: "Customer Satisfaction", current: false },
  { text: "Backlog", current: false },
];

const Dashbar = () => {
  return (
    <>
      <Card border="1px solid #ECEBF5" height="57px" flex={true}>
        <MainSection>
       
          <Card smWidth="100%" xsWidth="280px" overflowY="scroll">
            <Card height="57px" flex={true} width="100%">
              {barItems.map((item, pos) => (
                <Card
                  height="57px"
                  key={pos}
                  right="40px"
                  width="fit-content"
                  cursor="pointer"
                >
                  <Text
                    top="16px"
                    bottom="16px"
                    color={item?.current ? "#060213" : "#696D8C"}
                  >
                    {item?.text}
                  </Text>
                  {item?.current && <Divider color="#6837EF" size="1px" />}
                </Card>
              ))}
            </Card>
          </Card>
        </MainSection>
      </Card>
    </>
  );
};

export default Dashbar;
