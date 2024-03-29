import { useState } from "react";
import { useRouter } from "next/router";
import { BsArrowRightCircle } from "react-icons/bs";
import {
  Contents,
  TabMainTitle,
  TabTitle,
  TitleContainer,
  Wrapper,
  TabWrapper,
  TabBtn,
  DetailImg,
} from "./Section02.style";
import Tab from "../../../commons/tab/Tab.container";
import Title from "../../../commons/title/Title.container";
import TabIntro from "./intro/Intro.container";
import TabProfile from "./profile/Profile.container";
import TabSkill from "./skill/Skill.container";
import TabPage from "./page/Page.container";
import { ITypeTabList } from "../../../commons/tab/Tab.types";

export default function Section02() {
  const router = useRouter();

  const [tabList, setTabList] = useState([
    {
      title: "intro",
      contents: "Welcome to my portfolio. Discover more in the intro!",
      number: "01",
      view: true,
    },
    {
      title: "profile",
      contents:
        "Let me introduce myself. Sharing my journey, skills, and experiences.",
      number: "02",
      view: false,
    },
    {
      title: "skill",
      contents:
        "Presenting my skills—a versatile toolkit I bring to every project.",
      number: "03",
      view: false,
    },
    {
      title: "pages & PDF",
      contents:
        "I offer pages with my dev history and downloadable PDF portfolios.",
      number: "04",
      view: false,
    },
  ]);
  const [tabTitle, setTabTitle] = useState("Intro");

  const onClickMoveTab = (title: string) => () => {
    const updatedTabList = tabList.map((tab: ITypeTabList) => ({
      ...tab,
      view: tab.title === title,
    }));
    setTabList(updatedTabList);
    setTabTitle(title);
  };

  const onClickMovePages = (route: string) => () => {
    const title = route.toLowerCase();
    if (title) {
      if (title === "intro") {
        void router.push(`/`);
      } else if (title === "pages & pdf") {
        void router.push(`/contact`);
      } else {
        void router.push(`/${title}`);
      }
    }
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title paddingValue="50" titleName="about me" titleNum="02" />
      </TitleContainer>
      <TabWrapper>
        <TabMainTitle>
          <TabTitle>{tabTitle}</TabTitle>
          <TabBtn onClick={onClickMovePages(tabTitle)}>
            <BsArrowRightCircle />
          </TabBtn>
          <DetailImg src="/images/detail.png" alt="detail" />
        </TabMainTitle>
        <Tab tabList={tabList} onClickMoveTab={onClickMoveTab} />
      </TabWrapper>
      {tabList.map((el) => (
        <Contents key={el.title}>
          {el.view && el.title === "intro" ? (
            <TabIntro />
          ) : el.view && el.title === "profile" ? (
            <TabProfile />
          ) : el.view && el.title === "skill" ? (
            <TabSkill />
          ) : el.view && el.title === "pages & PDF" ? (
            <TabPage />
          ) : (
            ""
          )}
        </Contents>
      ))}
    </Wrapper>
  );
}
