import styled from "@emotion/styled";
import { Common } from "../../../../../commons/style/emotion";
import { Slide } from "react-awesome-reveal";

export const Wrapper = styled.div`
  padding-bottom: 200px;
`;

export const Contents = styled.div`
  width: 80%;
  font-size: 1.6em;
  line-height: 1.6em;
  font-family: ${Common.font.text};
  text-align: center;
  margin: 0 auto;
`;

export const Content = styled(Slide)`
  display: block;
  margin-bottom: 20px;
  &:first-of-type {
    span {
      display: flex;
      justify-content: center;
      gap: 30px;
      margin-bottom: 60px;
      svg {
        opacity: 0.7;
        width: 45px;
        height: 45px;
      }
    }
  }
`;
