import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div``;

export const Contents = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 700px;
  padding: 60px 30px;
  border-bottom: ${Common.line.style};
`;

export const Thumb = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  img {
    width: 100%;
  }
`;

export const Project = styled.div`
  display: flex;
  width: 55%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-family: ${Common.font.text};
`;
export const Title = styled.h5`
  font-size: 3em;
  margin-top: 10px;
  font-weight: 900;
  font-family: ${Common.font.default};
  background: ${Common.gradation.point};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Date = styled.p`
  font-size: 1.2em;
`;
export const Cont = styled.ul`
  opacity: 0.7;
  font-size: 1em;
  line-height: 1.5em;
  margin: 0 auto;
  li {
    margin: 0 auto;
    span {
      display: inline-block;
      width: 140px;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  gap: 30px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
  margin-top: auto;
`;

export const ViewBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  letter-spacing: 2px;
  padding: 22px 50px;
  font-size: 1.2em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${Common.color.white};
  font-family: ${Common.font.default};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.5, 0.24, 0, 1);
  &.view {
    padding: 22px 200px;
  }
  &::before {
    content: "";
    position: absolute;
    left: -1px;
    bottom: -1px;
    z-index: 1;
    width: 0;
    height: 1px;
    background: ${Common.color.sub};
    box-shadow: inset 0 0 0 #6098ff;
    display: block;
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  }
  &:hover::before {
    width: calc(100% + 2px);
  }
  &::after {
    content: "";
    position: absolute;
    right: -1px;
    top: -1px;
    z-index: 1;
    width: 0;
    height: 1px;
    background: ${Common.color.sub};
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  }
  &:hover::after {
    width: calc(100% + 2px);
  }
  &:hover {
    border-left: 1px solid ${Common.color.sub};
    border-right: 1px solid ${Common.color.sub};
  }
`;
