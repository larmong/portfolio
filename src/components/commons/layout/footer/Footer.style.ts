import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 110px;
`;

export const Copy = styled.div``;

export const Pages = styled.ul`
  display: flex;
  gap: 20px;
`;
export const PageIcon = styled.li`
  transition: all 0.3s ease-in-out;
  width: 25px;
  height: 25px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    opacity: 0.6;
  }
`;
