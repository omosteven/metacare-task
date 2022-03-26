import { FC } from "react";
import { Main } from "src/styles/Styles";
import { ILayoutProps } from "src/types/types.d";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header {...props} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
