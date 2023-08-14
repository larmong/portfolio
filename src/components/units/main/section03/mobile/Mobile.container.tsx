import {
  Content,
  Contents,
  Image,
  LeftText,
  Title,
  Wrapper,
} from "./Mobile.style";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function TabMobile() {
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
            모바일페이지 사이드 프로젝트는 모바일 기기에서도 뛰어난 접근성과
            사용의 용이성을 유지하며 웹앱사이트를 구현했습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            반응형 디자인과&nbsp;
            <em onMouseEnter={handleMouse(1)} onMouseLeave={handleMouse(1)}>
              모바일 터치 인터랙션
            </em>
            을 고려하여 사용자가 편안하게 사이트를 이용하는것을 최우선으로
            생각하여 프로젝트를 진행하였습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            현재는 웹앱으로 퍼블리싱되었지만, 더 나아가 실제 앱 개발에
            도전하고자 합니다. 앱 개발을 위한 언어와 기술을 배워&nbsp;
            <em onMouseEnter={handleMouse(2)} onMouseLeave={handleMouse(2)}>
              실제 애플리케이션을 만들어보는 것
            </em>
            이 제 도전과제입니다.
          </span>
        </Content>
      </LeftText>
      <Contents triggerOnce={true} direction="right">
        <span>
          <Title>Overview</Title>
          <Image>
            {isHover01 ? (
              <Fade>
                <img src="/images/mobile1.gif" alt="mobile" />
              </Fade>
            ) : isHover02 ? (
              <Fade>
                <img src="/images/mobile2.gif" alt="mobile" />
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
