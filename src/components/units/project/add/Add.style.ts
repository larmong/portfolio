import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-size: 3em;
`;

export const ProjectType = styled.div`
  text-transform: uppercase;
  display: flex;
  gap: 20px;
  font-size: 2em;
  cursor: pointer;
  margin-bottom: 20px;
  span {
    opacity: 0.5;
    &.on {
      opacity: 1;
      color: ${Common.color.point};
    }
  }
`;

export const Project = styled.ul`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  height: 40px;
`;
export const ItemName = styled.span`
  display: block;
  font-size: 2em;
  width: 150px;
`;
export const ItemInput = styled.input`
  width: calc(100% - 150px);
  height: 100%;
  padding: 5px 12px;
`;

export const ProjectBtn = styled.div`
  padding: 20px 100px;
  margin: 0 auto;
  background: ${Common.color.point};
  border-radius: 50px;
`;
