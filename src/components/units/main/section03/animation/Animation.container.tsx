import {
  Content,
  Contents,
  Image,
  LeftText,
  Title,
  Wrapper,
} from "./Animation.style";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function TabAnimation() {
  const [isHover01, setIsHover01] = useState(false);
  const [isHover02, setIsHover02] = useState(false);

  const handleMouse = (num: number) => () => {
    if (num === 1) {
      setIsHover01((prev) => !prev);
    } else if (num === 2) {
      setIsHover02((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <LeftText>
        <Content triggerOnce={true}>
          <span>
            자바스크립트를 사용하여 만든 애니메이션 프로젝트는 웹 인터페이스에
            생동감을 불어넣기 위해 시작한 토이 프로젝트입니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            <em onMouseEnter={handleMouse(1)} onMouseLeave={handleMouse(1)}>
              다양한 움직임과 시각적 효과
            </em>
            를 자바스크립트를 활용하여 구현하여 트렌디한 홈페이지를 만들기 위한
            목표를 가지고 진행하고 있습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            사용자가 웹사이트를&nbsp;
            <em onMouseEnter={handleMouse(2)} onMouseLeave={handleMouse(2)}>
              보다 즐겁고 흥미롭게 이용할 수 있도록
            </em>
            &nbsp; 하는 것을 추구하며, 이를 통해 인터랙션의 중요성과 다양한
            애니메이션 기법을 익히면서 개발 역량을 더욱 확장하고 성장하게
            되었습니다.
          </span>
        </Content>
      </LeftText>
      <Contents triggerOnce={true} direction="right">
        <span>
          <Title>Overview</Title>
          <Image>
            {isHover01 ? (
              <Fade>
                <img src="/images/animation1.gif" alt="animation" />
              </Fade>
            ) : isHover02 ? (
              <Fade>
                <img src="/images/animation2.gif" alt="animation" />
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
