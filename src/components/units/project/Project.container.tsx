import {
  Contents,
  TabMenu,
  TabMenuWrapper,
  TabTitle,
  Wrapper,
} from "./Project.style";
import { useEffect, useState } from "react";
import { ITypeTabList } from "./Project.types";
import { ITypeProject } from "../../../commons/server/json/json.types";
import Progress01 from "../../commons/progresses/progress01/Progress01.container";
import ProjectItem from "./item/Item.container";
import enableMirageMock from "../../../../src/commons/server/index";

export default function Project() {
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
  const [isCate, setIsCate] = useState<string>("ALL");
  const [isData, setIsData] = useState<boolean>(false);
  const [allProjects, setAllProjects] = useState<ITypeProject[]>([]);
  const [projects, setProjects] = useState<ITypeProject[]>([]);

  useEffect(() => {
    enableMirageMock();
    const getCategories = async () => {
      if (!isData) {
        try {
          const result = await fetch("/projects").then((res: Response) =>
            res.json()
          );
          setAllProjects(result.data);

          const filteredProducts = result.data.filter(
            (product: ITypeProject) => product.categoryId === isCate
          );

          setProjects(filteredProducts);
          setIsData(true);
        } catch (error) {}
      } else {
        const filteredProducts = allProjects.filter(
          (product: ITypeProject) => product.categoryId === isCate
        );
        setProjects(filteredProducts);
      }
    };
    void getCategories();
  }, [isCate]);

  const onClickMoveTab = (cate: string) => () => {
    const updatedTabList = tabList.map((tab: ITypeTabList) => ({
      ...tab,
      view: tab.title === cate,
    }));
    setTabList(updatedTabList);
    setIsCate(cate);
  };

  return (
    <Wrapper>
      <Progress01 />
      <TabMenuWrapper>
        {tabList.map((el: ITypeTabList) => (
          <TabMenu key={el.title} onClick={onClickMoveTab(el.title)}>
            <TabTitle isActive={el.view}>{el.title}</TabTitle>
          </TabMenu>
        ))}
      </TabMenuWrapper>
      <Contents>
        {isCate === "ALL" ? (
          <ProjectItem data={allProjects} />
        ) : (
          <ProjectItem data={projects} />
        )}
      </Contents>
    </Wrapper>
  );
}
