import { Fragment } from "react";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
        <>{props.children}</>
    </Fragment>
  );
}
