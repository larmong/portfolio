import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";
import { IPaddingValue } from "./Title.types";

export const TitleWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  font-size: 1.4em;
  font-weight: 600;
  max-font-size: 120px;
  border-bottom: ${Common.line.style};
  padding: ${(props: IPaddingValue) => props.paddingValue + "px 0px"};
`;

export const TitleName = styled.span``;
export const TitleNumber = styled.span``;
