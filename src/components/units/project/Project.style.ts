import styled from "@emotion/styled";
import { ITabValue } from "./Project.types";
import { Common } from "../../../commons/style/emotion";

export const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 100px;
`;

export const TabMenuWrapper = styled.div`
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 100px;
  background-image: url("/images/noise-background.jpg");
  z-index: 999;
  width: 100vw;
  max-width: 1400px;
  border-bottom: ${Common.line.style};
`;

export const TabMenu = styled.div`
  padding: 1em 0;
  cursor: pointer;
`;

export const TabTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  opacity: ${(props: ITabValue) => (props.isActive ? "1" : "0.5")};
  font-size: 1.4em;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const Contents = styled.div`
  width: 100%;
`;
