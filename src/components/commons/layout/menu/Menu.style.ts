import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  height: 100%;
`;
export const MenuWrapper = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const MenuItem = styled.li`
  text-transform: uppercase;
  font-size: 1.4em;
  font-weight: 600;
  padding: 0 10px;
  cursor: pointer;
  &.on {
    color: ${Common.color.point};
  }
  &:hover {
    opacity: ${Common.hover.text};
  }
  &:last-of-type {
    margin-left: auto;
  }
`;
