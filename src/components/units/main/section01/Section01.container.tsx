import {
  ContentLeft,
  ContentRight,
  Icon,
  Contents,
  Wrapper,
  Des,
  Link,
  Empty,
  Full,
  Text,
  ContentContainer,
  IntroWrapper,
  IntroTitle,
} from "./Section01.style";
import { JackInTheBox } from "react-awesome-reveal";
import { ITypeLinkList } from "./Section01.types";
import Progress01 from "../../../commons/progresses/progress01/Progress01.container";
import Title from "../../../commons/title/Title.container";

export default function Section01() {
  const linkList: ITypeLinkList[] = [
    {
      name: "github",
      url: "https://github.com/larmong",
    },
    {
      name: "velog",
      url: "https://velog.io/@larmong",
    },
  ];

  const onClickMoveToSite = (url: string) => () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Wrapper>
      <Progress01 />
      <ContentContainer>
        <ContentLeft></ContentLeft>
        <ContentRight>
          <Title paddingValue="0" titleName="portfolio" titleNum="01" />
          <Contents>
            <Des>
              <span>web frontend</span>
              <span>web publishing</span>
              <span>web design</span>
            </Des>
            <Link>
              {linkList.map((el: ITypeLinkList) => (
                <span key={el.name} onClick={onClickMoveToSite(el.url)}>
                  {el.name}
                  <Icon />
                </span>
              ))}
            </Link>
          </Contents>
          <IntroWrapper>
            <IntroTitle cascade>
              <Full>
                <JackInTheBox cascade damping={0.1}>
                  <span>l</span>
                  <span>a</span>
                  <span>r</span>
                  <span>m</span>
                  <span>o</span>
                  <span>n</span>
                  <span>g</span>
                </JackInTheBox>
              </Full>
              <Empty>
                <JackInTheBox cascade damping={0.1}>
                  <span>f</span>
                  <span>o</span>
                  <span>l</span>
                  <span>i</span>
                  <span>o</span>
                  <span>.</span>
                </JackInTheBox>
              </Empty>
            </IntroTitle>
          </IntroWrapper>
          <Text>
            안녕하세요😊 :)
            <br />
            사용자 중심의 웹을 만들기 위해 노력하는 프론트엔드 이아름입니다.
            <span>larmong portfolio 2023.ver</span>
          </Text>
        </ContentRight>
      </ContentContainer>
    </Wrapper>
  );
}
