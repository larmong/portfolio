import { Fragment } from "react";
import Header from "../../components/commons/layout/header/Header.container";
import styled from "@emotion/styled";
import { Container } from "../style/global.style";

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
      </Container>
    </Fragment>
  );
}
