import { Card } from "../../styles/Styles";

let defaultRows = 2;

const Preloader = (props: { rows?: number }) => {
  const { rows } = props;
  return (
    <>
      <Card
        background="white"
        border="1px solid #FAFAFA"
        height="fit-content"
        width="100%"
      >
        <Card top="16px">
          <Card
            top="16px"
            background="rgba(200,200,200,0.6)"
            height="50px"
            bottom="16px"
            animateOpacity={true}
          />

          {Array.from(Array(rows ? rows : defaultRows), (e) => {
            return (
              <Card
                top="16px"
                background="rgba(200,200,200,0.6)"
                height="20px"
                bottom="16px"
                key={e}
                animateOpacity={true}
              />
            );
          })}

          <Card
            top="16px"
            background="rgba(200,200,200,0.6)"
            height="50px"
            bottom="16px"
            animateOpacity={true}
          />
        </Card>
      </Card>
    </>
  );
};

export default Preloader;
