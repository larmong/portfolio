import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";
import { ITabValue } from "../../units/main/section02/Section02.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TabMenuWrapper = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

export const TabMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: ${(props: ITabValue) => `calc(100% / ${props.tabLength})`};
  padding: 30px 0;
  cursor: pointer;
  &::before {
    position: absolute;
    top: 0;
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
    top: 0;
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
  font-size: 1em;
  font-weight: bold;
  text-transform: capitalize;
`;
export const TabContents = styled.div``;
export const TabNumber = styled.span``;
