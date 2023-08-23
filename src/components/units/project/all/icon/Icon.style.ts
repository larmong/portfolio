import styled from "@emotion/styled";
import { Common } from "../../../../../commons/style/emotion";

export const Wrapper = styled.div``;
export const Skill = styled.div`
  margin-top: 10px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  svg {
    width: 100%;
    height: 100%;
  }
  span {
    display: block;
    font-family: ${Common.font.default};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.2em;
  }
`;
