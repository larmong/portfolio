import { Wrapper } from "./Main.style";
import Section01 from "./section01/Section01.container";
import Section02 from "./section02/Section02.container";

export default function Main() {
  return (
    <Wrapper>
      <Section01 />
      <Section02 />
    </Wrapper>
  );
}
