import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Content,
  Contents,
  Image,
  LeftText,
  Title,
  Wrapper,
} from "./Skill.style";

export default function TabSkill() {
  const [isHover01, setIsHover01] = useState(false);
  const [isHover02, setIsHover02] = useState(false);
  const [isHover03, setIsHover03] = useState(false);

  const handleMouse = (num: number) => () => {
    if (num === 1) {
      setIsHover01((prev) => !prev);
    } else if (num === 2) {
      setIsHover02((prev) => !prev);
    } else if (num === 3) {
      setIsHover03((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <LeftText>
        <Content triggerOnce={true}>
          <span>
            JavaScript, TypeScript, React.js, Node.js 등 다양한 기술 스킬에 대한
            이해도를&nbsp;
            <em onMouseEnter={handleMouse(1)} onMouseLeave={handleMouse(1)}>
              한눈에 파악할 수 있는 그래프
            </em>
            와 간결한 설명을 마련해두었습니다.
            <br />
            이를 통해 제가 어떤 분야에서 얼마나 능숙한지 빠르게 파악하실 수
            있습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            또한, 현재 새로운 언어와 기술 분야에 대한 공부를 진행하고 있으며,
            <br />
            개인적으로&nbsp;
            <em onMouseEnter={handleMouse(2)} onMouseLeave={handleMouse(2)}>
              관심을 가지고 있는 분야
            </em>
            &nbsp; 또한 확인하실 수 있습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            스킬 페이지를 통해 저의 지속적인 역량 강화와
            <br />
            <em onMouseEnter={handleMouse(3)} onMouseLeave={handleMouse(3)}>
              끊임없는 성장에 대한 흥미와 열정
            </em>
            을 전달하고자 합니다.
          </span>
        </Content>
      </LeftText>
      <Contents triggerOnce={true} direction="right">
        <span>
          <Title>Overview</Title>
          <Image>
            {isHover01 ? (
              <Fade>
                <img src="/images/skill1.gif" alt="skill" />
              </Fade>
            ) : isHover02 ? (
              <Fade>
                <img src="/images/skill2.gif" alt="skill" />
              </Fade>
            ) : isHover03 ? (
              <Fade>
                <img src="/images/skill3.gif" alt="skill" />
              </Fade>
            ) : (
              ""
            )}
          </Image>
        </span>
      </Contents>
    </Wrapper>
  );
}
