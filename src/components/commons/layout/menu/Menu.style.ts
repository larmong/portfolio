import styled from "@emotion/styled";

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
  font-size: 18px;
  font-weight: 900;
  padding: 0 10px;
  cursor: pointer;
  &.on {
    color: #fe721c;
  }
  &:last-of-type {
    margin-left: auto;
  }
`;
