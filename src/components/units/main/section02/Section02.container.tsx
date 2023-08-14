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
} from "./Section02.style";
import Tab from "../../../commons/tab/Tab.container";
import Title from "../../../commons/title/Title.container";
import TabIntro from "./intro/Intro.container";
import TabProfile from "./profile/Profile.container";
import TabSkill from "./skill/Skill.container";
import TabFile from "./file/File.container";
import { ITypeTabList } from "../../../commons/tab/Tab.types";

export default function Section02() {
  const router = useRouter();

  const [tabList, setTabList] = useState([
    {
      title: "Intro",
      contents: "Welcome to my portfolio. Discover more in the intro!",
      number: "01",
      view: true,
    },
    {
      title: "Profile",
      contents:
        "Let me introduce myself. Sharing my journey, skills, and experiences.",
      number: "02",
      view: false,
    },
    {
      title: "Skill",
      contents:
        "Presenting my skills—a versatile toolkit I bring to every project.",
      number: "03",
      view: false,
    },
    {
      title: "File",
      contents:
        "Grab your resume and portfolio as downloadable PDFs for insights.",
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

  const onClickMoveAboutMe = () => {
    void router.push("/aboutme");
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title paddingValue="50" titleName="about me" titleNum="02" />
      </TitleContainer>
      <TabWrapper>
        <TabMainTitle>
          <TabTitle>{tabTitle}</TabTitle>
          <TabBtn onClick={onClickMoveAboutMe}>
            <BsArrowRightCircle />
          </TabBtn>
        </TabMainTitle>
        <Tab tabList={tabList} onClickMoveTab={onClickMoveTab} />
      </TabWrapper>
      {tabList.map((el) => (
        <Contents key={el.title}>
          {el.view && el.title === "Intro" ? (
            <TabIntro />
          ) : el.view && el.title === "Profile" ? (
            <TabProfile />
          ) : el.view && el.title === "Skill" ? (
            <TabSkill />
          ) : el.view && el.title === "File" ? (
            <TabFile />
          ) : (
            ""
          )}
        </Contents>
      ))}
    </Wrapper>
  );
}
