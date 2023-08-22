import Progress from "../../commons/progresses/progress02/Progress02.container";
import { SiAdobeacrobatreader } from "react-icons/si";
import { RiFlutterFill, RiJavascriptFill } from "react-icons/ri";
import {
  ProgressWrapper,
  SkillCont,
  SkillDsc,
  SkillIcon,
  SkillItem,
  Skills,
  SkillsWrapper,
  SkillText,
  SkillTitle,
  Wrapper,
} from "./Skill.style";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJava,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { ITypeSkills } from "./Skill.types";

export default function Skill() {
  const skills: ITypeSkills[] = [
    {
      icon: <FaHtml5 />,
      title: "html5",
      progress: 100,
      cont: "웹 표준을 준수하기 위한 IR(Inclusion & Respect) 기법과 시맨틱 태그 활용을 통해 웹페이지의 구조를 체계적으로 설계하며, 검색 엔진 최적화를 위한 메타 태그와 OG(Open Graph) 태그를 적용해서 많은 사용자들이 이용할 수 있도록 마크업합니다.",
      color: "ff7c49",
    },
    {
      icon: <FaCss3Alt />,
      title: "css3",
      progress: 90,
      cont: "Figma, AdobeXD를 이용한 UI/UX 디자인을 오차 없이 구현할 수 있으며, Media Query를 활용하여 반응형 디자인을 구축할 수 있습니다. Emotion을 활용하여 스타일을 재사용 가능하게 만듭니다.",
      color: "4568ff",
    },
    {
      icon: <RiJavascriptFill />,
      title: "javascript",
      progress: 90,
      cont: "웹 페이지에 애니메이션 등의 동적인 기능과 사용자 인터랙션을 구현할 수 있고, DOM 조작과 이벤트 처리를 통해 웹페이지를 구현합니다.",
      color: "fcb045",
    },
    {
      icon: <FaReact />,
      title: "react.js",
      progress: 80,
      cont: "컴포넌트 기반 아키텍처를 활용하여 UI를 모듈화하고 재사용 가능한 단위로 개발하며, 가상 DOM을 활용하여 성능을 향상시키는데 중점을 두고 있고, 꾸준히 공부하고 있습니다.",
      color: "82d6ff",
    },
    {
      icon: <FaVuejs />,
      title: "vue.js",
      progress: 50,
      cont: "Vue.js를 활용하여 프로젝트의 구조를 생성하고 UI 퍼블리싱을 수행할 수 있습니다. 반응성 데이터 바인딩과 컴포넌트 기반 개발을 통해 빠르게 프로토타이핑하고 유연한 사용자 인터페이스를 개발할 수 있습니다.",
      color: "37c776",
    },
    {
      icon: <RiFlutterFill />,
      title: "flutter",
      progress: 50,
      cont: "앱 제작을 위해 공부하고 있는 언어로, Flutter의 크로스 플랫폼 능력을 활용하여 Android와 iOS 모두에서 일관된 사용자 경험을 제공하는 앱을 구축하는 것을 목표로 하고 있습니다.",
      color: "8affff",
    },
    {
      icon: <FaFigma />,
      title: "UI/UX design",
      progress: 100,
      cont: "웹 및 앱의 프론트엔드 작업을 위한 UI/UX 디자인 시안을 Figma, Adobe XD와 같은 프로토타입 툴을 사용하여 제작할 수 있습니다. 사용자 경험과 디자인 요소를 고려하여 제작 할 수 있습니다.",
      color: "833ab4",
    },
    {
      icon: <SiAdobeacrobatreader />,
      title: "web design",
      progress: 100,
      cont: "웹 및 앱 페이지에 사용되는 상세페이지와 배너 이미지를 Photoshop, Illustrator를 사용하여 디자인할 수 있고, 디자인 감각과 시각적 요소를 활용하여 브랜드 아이덴티티를 형성하는 로고 디자인도 제작할 수 있습니다.",
      color: "f27fb2",
    },
  ];
  return (
    <Wrapper>
      <SkillsWrapper>
        <Skills
          direction="up"
          cascade={true}
          triggerOnce={true}
          className="fadeChild"
        >
          {skills.map((el: ITypeSkills, index: number) => (
            <SkillItem key={index}>
              <SkillCont>
                <ProgressWrapper>
                  <Progress progress={el.progress} color={el.color} />
                  <SkillIcon>{el.icon}</SkillIcon>
                </ProgressWrapper>
                <SkillTitle>{el.title}</SkillTitle>
              </SkillCont>
              <SkillDsc>{el.cont}</SkillDsc>
            </SkillItem>
          ))}
        </Skills>
      </SkillsWrapper>
      <SkillText>
        프론트엔드 기술 외에도 자료구조와 데이터베이스 등에 깊이있게 관심을
        가지고 공부하고 있습니다. 또한 GraphQL을 활용하여 API를 개발하고 기존의
        REST API를 감싸서 더욱 효율적으로 활용하고 있습니다. 이를 통해 기존의
        API를 변경하지 않고도 데이터를 더욱 효과적으로 가져오고 조작할 수 있는
        새로운 방식에 대한 이해를 갖추고 있습니다. 이러한 다양한 학습을 통해
        프론트엔드 뿐만 아니라 백엔드 및 시스템 전반에 대한 종합적인 역량을
        키우고 있습니다! ☺️
      </SkillText>
    </Wrapper>
  );
}
