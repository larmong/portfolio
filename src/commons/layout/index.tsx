import { Fragment } from "react";
import Header from "../../components/commons/layout/header/Header.container";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div`
  padding: 120px 60px 0 60px;
`;

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <Header />
      <Page>{props.children}</Page>
    </Fragment>
  );
}
