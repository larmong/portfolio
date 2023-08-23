import {
  Contents,
  TabMenu,
  TabMenuWrapper,
  TabTitle,
  Wrapper,
} from "./Project.style";
import { db } from "../../../commons/libraries/firebase/firebase.config";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { ITypeTabList } from "./Project.types";
import { ITypeProject } from "../../../commons/libraries/firebase/data.types";
import Progress01 from "../../commons/progresses/progress01/Progress01.container";
import ProjectItem from "./item/Item.container";

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
    const getCategories = async () => {
      if (!isData) {
        const data = await query(
          collection(db, "projects"),
          orderBy("num", "asc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setAllProjects(result);
        console.log(result);

        const filteredProducts = result.filter(
          (product: ITypeProject) => product.categoryId === isCate
        );

        setProjects(filteredProducts);
        setIsData(true);
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
