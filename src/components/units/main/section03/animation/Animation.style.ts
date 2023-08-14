import styled from "@emotion/styled";
import { Common } from "../../../../../commons/style/emotion";
import { Slide } from "react-awesome-reveal";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const LeftText = styled.div`
  width: calc(100% - 450px);
  font-size: 1.6em;
  line-height: 1.6em;
  font-family: ${Common.font.text};
`;

export const Content = styled(Slide)`
  display: block;
  margin-bottom: 50px;
  em {
    position: relative;
    display: inline-block;
    cursor: pointer;
    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${Common.color.white};
      opacity: 0.3;
      z-index: -2;
    }
    &::after {
      transition: all 0.3s ease-in-out;
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${Common.color.white};
      opacity: 1;
      z-index: -1;
    }
  }
  em:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const Contents = styled(Slide)`
  width: 300px;
  span {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Image = styled.div`
  transition: all 0.3s ease-in-out;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const Title = styled.span`
  display: inline-block;
  text-align: right;
  font-size: 1.4em;
`;
