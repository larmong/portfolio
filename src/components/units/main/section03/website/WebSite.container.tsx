import {
  Content,
  Contents,
  Image,
  LeftText,
  Title,
  Wrapper,
} from "./WebSite.style";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function TabWebSite() {
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
            <em onMouseEnter={handleMouse(1)} onMouseLeave={handleMouse(1)}>
              새로운 아이디어를 코드로 구현
            </em>
            하는 과정을 즐기며, 사용자 경험을 개선하고 멋진 인터페이스를 구축
            하는 일에 큰 흥미를 가지고 있습니다. 끊임없이 발전하는 기술 동향을
            따라가며 배우는 것을 좋아하며,&nbsp;
            <em onMouseEnter={handleMouse(2)} onMouseLeave={handleMouse(2)}>
              코드를 작성할때 가독성과 유지보수
            </em>
            를 고려한 코드를 작성하는것에 집중합니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            포트폴리오에는 저의 프론트엔드&nbsp;
            <em onMouseEnter={handleMouse(3)} onMouseLeave={handleMouse(3)}>
              개발자로서의 성장과정
            </em>
            을 확인하실 수 있도록 다양한 사이드 프로젝트들을 담았습니다.
            최근에는 문제 해결 과정을 Readme를 통해 확인 할 수 있도록 정리하며
            진행하고있습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            포트폴리오를 통해 저에 대해 더 자세히 알아가시면 좋을 것 같습니다.
            <br />
            감사합니다:) ☺️
          </span>
        </Content>
      </LeftText>
      <Contents triggerOnce={true} direction="right">
        <span>
          <Title>Overview</Title>
          <Image>
            {isHover01 ? (
              <Fade>
                <img src="/images/intro1.gif" alt="intro" />
              </Fade>
            ) : isHover02 ? (
              <Fade>
                <img src="/images/intro2.gif" alt="intro" />
              </Fade>
            ) : isHover03 ? (
              <Fade>
                <img src="/images/intro3.gif" alt="intro" />
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
