import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  border-bottom: ${Common.line.style};
  margin-bottom: 100px;
`;

export const TitleContainer = styled.div`
  font-size: 3em;
  text-transform: uppercase;
  font-family: ${Common.font.default};
`;

export const Contents = styled.div`
  padding: 30px 0 0 0;
`;

export const TabMainTitle = styled.div`
  position: relative;
  width: 30%;
  p {
    font-size: 3em;
  }
`;
export const DetailImg = styled.img`
  width: 160px;
  position: absolute;
  top: 160px;
  left: 35px;
`;

export const TabTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TabBtn = styled.div`
  transition: all 0.3s ease-in-out;
  display: inline-block;
  margin-top: 10px;
  opacity: 0.3;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 60px;
    height: 60px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
`;
