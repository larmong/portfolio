import Progress01 from "../../commons/progresses/progress01/Progress01.container";
import {
  Contents,
  TabMenu,
  TabMenuWrapper,
  TabTitle,
  Wrapper,
} from "./Project.style";
import { ITypeTabList } from "./Project.types";
import { useState } from "react";
import All from "./all/All.container";
import Animation from "./animation/Animation.container";
import Design from "./design/Design.container";
import Mobile from "./mobile/Mobile.container";
import WebPage from "./webPage/WebPage.container";

export default function Project() {
  const [tabTitle, setTabTitle] = useState("ALL");
  const [tabList, setTabList] = useState<ITypeTabList[]>([
    {
      title: "ALL",
      view: true,
    },
    {
      title: "Web Page",
      view: false,
    },
    {
      title: "Mobile",
      view: false,
    },
    {
      title: "Animation",
      view: false,
    },
    {
      title: "Design",
      view: false,
    },
  ]);

  const onClickMoveTab = (title: string) => () => {
    const updatedTabList = tabList.map((tab: ITypeTabList) => ({
      ...tab,
      view: tab.title === title,
    }));
    setTabList(updatedTabList);
    setTabTitle(title);
  };

  return (
    <Wrapper>
      <Progress01 />
      <TabMenuWrapper>
        {tabList.map((el: ITypeTabList) => (
          <TabMenu
            key={el.title}
            isActive={el.view}
            onClick={onClickMoveTab(el.title)}
          >
            <TabTitle>{el.title}</TabTitle>
          </TabMenu>
        ))}
      </TabMenuWrapper>
      <Contents>
        {tabList.map((el: ITypeTabList) => (
          <Contents key={el.title}>
            {el.view && el.title === "ALL" ? (
              <All />
            ) : el.view && el.title === "Web Page" ? (
              <WebPage />
            ) : el.view && el.title === "Mobile" ? (
              <Mobile />
            ) : el.view && el.title === "Animation" ? (
              <Animation />
            ) : el.view && el.title === "Design" ? (
              <Design />
            ) : (
              ""
            )}
          </Contents>
        ))}
      </Contents>
    </Wrapper>
  );
}
