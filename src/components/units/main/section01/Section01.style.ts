import styled from "@emotion/styled";
import { FiArrowUpRight } from "react-icons/fi";
import { Common } from "../../../../commons/style/emotion";
import { Fade } from "react-awesome-reveal";

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 200px);
`;
export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  border-bottom: ${Common.line.style};
`;

export const ContentLeft = styled.div`
  width: 45%;
  background: rgba(255, 255, 255, 0.05);
`;
export const ContentRight = styled.div`
  width: 55%;
  height: 100%;
  > div {
    border-bottom: ${Common.line.style};
    text-transform: uppercase;
  }
  > div:last-of-type {
    border-bottom: none;
  }
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  font-size: 1.1em;
  span {
    letter-spacing: 0.5px;
  }
`;

export const Des = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    position: relative;
    display: inline-block;
    margin-left: 20px;
  }
  span::after {
    position: absolute;
    top: 50%;
    left: -17px;
    transform: translateY(-50%);
    content: "#";
  }
`;
export const Link = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  span {
    transition: all 0.3s ease-in-out;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 900;
    font-size: 1.2em;
    &::before {
      transition: all 0.3s ease-in-out;
      position: absolute;
      z-index: -1;
      content: "";
      top: 50%;
      left: -5px;
      transform: translateY(-50%);
      width: 0;
      height: 25px;
      background: ${Common.color.highlighter};
    }
    &:hover {
      color: ${Common.color.default};
      &::before {
        width: calc(100% + 6px);
      }
    }
  }
`;
export const Icon = styled(FiArrowUpRight)`
  width: 26px;
  height: 26px;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
`;
export const IntroTitle = styled(Fade)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  font-family: ${Common.font.point};
  > div {
    transform: scaleY(1.3);
    display: flex;
    font-size: 7em;
  }
`;

export const Full = styled.div`
  text-transform: lowercase;
`;
export const Empty = styled.div`
  color: transparent;
  -webkit-text-stroke: 2px ${Common.color.white};
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  text-align: right;
  line-height: 1.5em;
  font-family: ${Common.font.text};
`;
