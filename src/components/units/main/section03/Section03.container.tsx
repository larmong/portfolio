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
} from "./Section03.style";
import Tab from "../../../commons/tab/Tab.container";
import Title from "../../../commons/title/Title.container";
import { ITypeTabList } from "../../../commons/tab/Tab.types";
import TabWebSite from "./website/WebSite.container";
import TabMobile from "./mobile/Mobile.container";
import TabAnimation from "./animation/Animation.container";

export default function Section03() {
  const router = useRouter();

  const [tabList, setTabList] = useState([
    {
      title: "Web Page",
      contents:
        "A web-based side project, showcasing my skills and creativity in web development.",
      number: "01",
      view: true,
    },
    {
      title: "Mobile",
      contents:
        "A mobile site side project, highlighting my abilities in mobile-responsive design and development.",
      number: "02 ",
      view: false,
    },
    {
      title: "Animation",
      contents: "JavaScript-driven animations that captivate through motion.",
      number: "03",
      view: false,
    },
  ]);
  const [tabTitle, setTabTitle] = useState("Web Page");

  const onClickMoveTab = (title: string) => () => {
    const updatedTabList = tabList.map((tab: ITypeTabList) => ({
      ...tab,
      view: tab.title === title,
    }));
    setTabList(updatedTabList);
    setTabTitle(title);
  };

  const onClickMoveProject = () => {
    void router.push(`/project`);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title paddingValue="50" titleName="project" titleNum="03" />
      </TitleContainer>
      <TabWrapper>
        <TabMainTitle>
          <TabTitle>{tabTitle}</TabTitle>
          <TabBtn onClick={onClickMoveProject}>
            <BsArrowRightCircle />
          </TabBtn>
          <DetailImg src="/images/detail.png" alt="detail" />
        </TabMainTitle>
        <Tab tabList={tabList} onClickMoveTab={onClickMoveTab} />
      </TabWrapper>
      {tabList.map((el) => (
        <Contents key={el.title}>
          {el.view && el.title === "Web Page" ? (
            <TabWebSite />
          ) : el.view && el.title === "Mobile" ? (
            <TabMobile />
          ) : el.view && el.title === "Animation" ? (
            <TabAnimation />
          ) : (
            ""
          )}
        </Contents>
      ))}
    </Wrapper>
  );
}
