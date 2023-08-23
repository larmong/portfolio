import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";
import { ITabValue } from "./Project.types";

export const Wrapper = styled.div`
  margin-bottom: 200px;
`;

export const TabMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  margin: 50px 0 80px 0;
`;

export const TabMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 140px;
  padding: 1em 0;
  cursor: pointer;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background: ${Common.color.white};
    opacity: 0.5;
    z-index: 1;
  }
  &::after {
    transition: all 0.3s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: ${(props: ITabValue) => (props.isActive ? "100%" : "0px")};
    height: 1px;
    background: ${Common.color.white};
    z-index: 2;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
export const TabTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Contents = styled.div`
  width: 100%;
`;
