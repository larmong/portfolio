import { Fade } from "react-awesome-reveal";
import {
  Content,
  Contents,
  Image,
  LeftText,
  Title,
  Wrapper,
} from "./Profile.style";
import { useState } from "react";

export default function TabProfile() {
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
            처음은&nbsp;
            <em onMouseEnter={handleMouse(1)} onMouseLeave={handleMouse(1)}>
              웹디자이너로서 시작
            </em>
            하여 웹디자인과 사용자 경험에 대한 깊은 흥미를 느꼈습니다. 그리고
            웹퍼블리셔 로 발전하며 디자인이 웹 환경에서 어떻게 구현되는지에 대한
            이해를 확장하였습니다. 이러한 과정에서 웹 기술에 대한 열정이
            자라나며,&nbsp;
            <em onMouseEnter={handleMouse(2)} onMouseLeave={handleMouse(2)}>
              프론트엔드 개발
            </em>
            의 세계에 더욱 빠져들게 되었습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            이전의 경험들이 프론트엔드 개발로의 발전을 향한 중요한
            발판이었습니다. 프론트엔드 개발자로서의 길은 처음부터 완벽하지
            않았지만, 저의 열정과 호기심은 항상 제게 원동력을 제공하였습니다. 그
            결과, 기존의 디자인 스킬과 퍼블리싱 경험이 개발 역량을 높이는데 큰
            도움이 되었습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            또한, 개발자로서의 짧은 기간 동안 더 나은 개발자로 성장하기 위해
            지속적으로 노력하고 있습니다.&nbsp;
            <em onMouseEnter={handleMouse(3)} onMouseLeave={handleMouse(3)}>
              새로운 프로그래밍 언어와 기술
            </em>
            을 익히며 사이드 프로젝트에 도전하고, 문제를 해결하는 과정에서
            끊임없이 발전하고 있습니다.
          </span>
        </Content>
      </LeftText>
      <Contents triggerOnce={true} direction="right">
        <span>
          <Title>Overview</Title>
          <Image>
            {isHover01 ? (
              <Fade>
                <img src="/images/profile1.gif" alt="profile" />
              </Fade>
            ) : isHover02 ? (
              <Fade>
                <img src="/images/profile2.gif" alt="profile" />
              </Fade>
            ) : isHover03 ? (
              <Fade>
                <img src="/images/profile3.gif" alt="profile" />
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
