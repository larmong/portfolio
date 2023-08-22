import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

export const DonutProgress = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProgressCont = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  background: ${Common.color.default};
`;
