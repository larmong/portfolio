import { TitleWrapper, TitleName, TitleNumber } from "./Title.style";
import { IPropsTitle } from "./Title.types";

export default function Title(props: IPropsTitle) {
  return (
    <TitleWrapper paddingValue={props.paddingValue}>
      <TitleName>{props.titleName}</TitleName>
      <TitleNumber># {props.titleNum}</TitleNumber>
    </TitleWrapper>
  );
}
