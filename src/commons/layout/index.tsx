import { Container } from "../style/global.style";
import { Fragment } from "react";
import styled from "@emotion/styled";
import Header from "../../components/commons/layout/header/Header.container";
import Footer from "../../components/commons/layout/footer/Footer.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div`
  padding: 120px 0 0 0;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <Header />
      <Container>
        <Page>{props.children}</Page>
        <Footer />
      </Container>
    </Fragment>
  );
}
