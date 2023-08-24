import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";

export const Wrapper = styled.div`
  min-height: calc(100vh - 293.5px);
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Page = styled.div`
  text-align: center;
  width: calc(25% - 22.5px);

  h5 {
    font-size: 3em;
    text-transform: uppercase;
  }

  p {
    opacity: 0.8;
    font-family: ${Common.font.text};
    margin: 20px 0 50px 0;
  }

  span {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    display: inline-block;
    padding: 20px 60px;
    border: ${Common.line.style};
    text-transform: uppercase;
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  a {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    display: inline-block;
    padding: 20px 60px;
    border: ${Common.line.style};
    text-transform: uppercase;
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;
