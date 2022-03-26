import { Grid } from "@mui/material";
import {
  Button,
  Card,
  Divider,
  Option,
  ScreenControl,
  SelectField,
  Text,
  TextField,
} from "src/styles/Styles";

const DashFilter = () => {
  return (
    <>
      <Card
        height="109px"
        xsHeight="fit-content"
        smHeight="fit-content"
        mdHeight="fit-content"
      >
        <Card top="36px">
          <Grid container spacing={2}>
            <Grid item lg={2} md={12} sm={12} xs={12}>
              <Text color="#060213" lineHeight="160%" weight="600">
                Efficiency Analytics
              </Text>
            </Grid>

            <Grid item lg={10} md={12} sm={12} xs={12}>
              <ScreenControl lg>
                <Card
                  flex={true}
                  width="fit-content"
                  mdWidth="100%"
                  left="auto"
                >
                  <TextField
                    placeholder="&#61442;   Search"
                    border="#E1E1EB"
                    background="#FFFFFF"
                    radius="8px"
                    width="350px"
                    height="44px"
                    smWidth="100%"
                    xsWidth="100%"
                    className="icon-placeholder"
                  />
                  <SelectField
                    placeholder="Search"
                    border="#E1E1EB"
                    background="#FFFFFF"
                    radius="8px"
                    height="44px"
                    width="160px"
                    smWidth="100%"
                    xsWidth="100%"
                    color="#060213"
                    left="24px"
                  >
                    <Option>Filter Options</Option>
                  </SelectField>

                  <Divider
                    //   vertical={true}
                    color="#ecebf5"
                    size="24px"
                    top="10px"
                    bottom="36px"
                    left="16px"
                    right="16px"
                  />
                  <Button width="105px" height="44px">
                    Export
                  </Button>
                </Card>
              </ScreenControl>
            </Grid>

            <Grid item lg={0} md={5} sm={5} xs={6}>
              <ScreenControl md sm xs>
                <TextField
                  placeholder="Search"
                  border="#E1E1EB"
                  background="#FFFFFF"
                  radius="8px"
                  height="44px"
                  width="100%"
                />
              </ScreenControl>
            </Grid>
            <Grid item lg={12} md={5} sm={5} xs={6}>
              <ScreenControl md sm xs>
                <SelectField
                  placeholder="Search"
                  border="#E1E1EB"
                  background="#FFFFFF"
                  radius="8px"
                  height="44px"
                  width="100%"
                  color="#060213"
                >
                  <Option>Filter Options</Option>
                </SelectField>
              </ScreenControl>
            </Grid>
            <Grid item lg={12} md={2} sm={2} xs={12}>
              <ScreenControl md sm xs>
                <Button bottom="32px" width="105px" left="auto">
                  Export
                </Button>
              </ScreenControl>
            </Grid>
          </Grid>
        </Card>
      </Card>
    </>
  );
};

export default DashFilter;
