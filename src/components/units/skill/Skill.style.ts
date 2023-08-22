import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";
import { Fade } from "react-awesome-reveal";

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 100px 50px;
`;
export const Skills = styled(Fade)`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  &.fadeChild {
    width: calc(25% - 37.5px);
  }
`;

export const SkillItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const SkillCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
export const ProgressWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;
export const SkillIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  svg {
    width: 65px;
    height: 65px;
  }
`;
export const SkillTitle = styled.span`
  font-size: 1.8em;
  font-family: ${Common.font.point};
`;

export const SkillDsc = styled.p`
  text-align: justify;
  word-break: break-all;
  font-family: ${Common.font.text};
  font-size: 1em;
  line-height: 1.6em;
`;

export const SkillText = styled.div`
  width: 100%;
  margin: 200px 0 100px 0;
  text-align: center;
  font-size: 1.6em;
  line-height: 1.6em;
  font-family: ${Common.font.text};
`;
