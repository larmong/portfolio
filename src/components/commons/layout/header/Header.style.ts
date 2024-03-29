import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 120px;
  background-image: url("/images/noise-background.jpg");
`;

export const LogoWrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;
export const Logo = styled.img`
  width: 120px;
`;

export const MenuWrapper = styled.div`
  height: 50px;
  border-top: ${Common.line.style};
  border-bottom: ${Common.line.style};
`;
