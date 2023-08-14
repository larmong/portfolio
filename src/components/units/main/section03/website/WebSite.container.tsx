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
            웹 사이드 프로젝트는 저의&nbsp;
            <em onMouseEnter={handleMouse(1)} onMouseLeave={handleMouse(1)}>
              웹 개발 역량의 단계를 효과적
            </em>
            으로 보여주는 프로젝트입니다. 이 프로젝트에서는 다양한 프론트엔드
            기술과 백엔드 기능을 사용하여 사용자들이 흥미롭고 즐거운 경험을 얻을
            수 있는 웹페이지를 구현하고자 했습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            사용자 친화적인 UI/UX 디자인과 모바일 반응형 구현을 통해 웹
            환경에서의 편의성과 직관성을 최적화하는 방향을 노력하며 개발해
            나가고 있습니다. 이를 통해 웹 개발의 다양한 측면을 체험하고,&nbsp;
            <em onMouseEnter={handleMouse(2)} onMouseLeave={handleMouse(2)}>
              프로젝트 진행 중 마주한 다양한 이슈
            </em>
            들을 해결하며 전반적인 웹 개발 과정을 깊이 이해려고 공부하고
            있습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            뿐만아니라, 웹 사이드 프로젝트를 통해 디자인 단계부터 프론트엔드와
            백엔드까지의 업무를 경험해보면서, 팀원들과 협업하여 업무를 조화롭게
            진행하는 과정에서의 중요성을 깨달았고 협업을 위한 의사소통과 역할
            분담의 중요성을 실제로 체감하게되었습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            또한,&nbsp;
            <em onMouseEnter={handleMouse(3)} onMouseLeave={handleMouse(3)}>
              자체적인 QA를 진행
            </em>
            하면서 지속적인 품질 개선을 추구하는 것에도 큰 관심과 노력을
            기울이고 있습니다. 이를 통해 웹 개발자로서의 역량을 지속적으로
            향상시키고, 사용자들에게 더 나은 경험을 제공할 수 있는 방향이 될 수
            있도록 고민하고 있습니다.
          </span>
        </Content>
      </LeftText>
      <Contents triggerOnce={true} direction="right">
        <span>
          <Title>Overview</Title>
          <Image>
            {isHover01 ? (
              <Fade>
                <img src="/images/website1.gif" alt="website" />
              </Fade>
            ) : isHover02 ? (
              <Fade>
                <img src="/images/website2.gif" alt="website" />
              </Fade>
            ) : isHover03 ? (
              <Fade>
                <img src="/images/website3.gif" alt="website" />
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
