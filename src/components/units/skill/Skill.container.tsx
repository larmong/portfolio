import { Wrapper } from "./Skill.style";
import Progress from "../../commons/progresses/progress02/Progress02.container";

export default function Skill() {
  return (
    <Wrapper>
      <Progress done="100" />
      <Progress done="70" />
      <Progress done="50" />
      <Progress done="20" />
    </Wrapper>
  );
}
