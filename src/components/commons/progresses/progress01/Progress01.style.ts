import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const ProgressScrollBar = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 14px;
  border-top: 1px solid ${Common.color.white};
  background: ${Common.color.default};
`;
export const ScrollBar = styled.div`
  height: 100%;
  background: ${Common.color.white};
  width: 0;
`;
