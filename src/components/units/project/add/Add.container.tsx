import {
  Item,
  ItemInput,
  ItemName,
  Project,
  ProjectBtn,
  ProjectType,
  Title,
  Wrapper,
} from "./Add.style";
import { useState } from "react";
import { useRouter } from "next/router";
import { collection, doc, setDoc } from "firebase/firestore";
import { CustomChangeEvent } from "../../../../commons/types/global.types";
import { db } from "../../../../commons/libraries/firebase/firebase.config";

export default function ProjectAdd() {
  const router = useRouter();
  const [isType, setIsType] = useState("Web Page");
  const [data, setData] = useState({
    num: 0,
    startDate: "",
    endDate: "",
    title: "",
    thumb: "",
    cont: {
      unit: "",
      optimization: "",
      percent: "",
    },
    skills: [""],
    view: {
      code: "",
      page: "https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fthumb.png?alt=media&token=c132f24b-5bca-4c7f-8de7-6389ec93eb71",
    },
  });
  const onChangeContent = (event: CustomChangeEvent) => {
    if (event.target.id === "code" || event.target.id === "page") {
      setData({
        ...data,
        view: {
          ...data.view,
          [event.target.id]: event.target.value,
        },
      });
    } else if (
      event.target.id === "unit" ||
      event.target.id === "optimization" ||
      event.target.id === "percent"
    ) {
      setData({
        ...data,
        cont: {
          ...data.cont,
          [event.target.id]: event.target.value,
        },
      });
    } else {
      setData({
        ...data,
        [event.target.id]: event.target.value,
      });
    }
  };

  const type = [
    { name: "Web Page" },
    { name: "Mobile" },
    { name: "Animation" },
    { name: "Design" },
  ];

  const onClickType = (type: string) => () => {
    setIsType(type);
  };

  const onClickSubmit = async () => {
    try {
      const docRef = doc(collection(db, "projects"));
      await setDoc(docRef, {
        categoryId: isType,
        ...data,
      });
      alert("프로젝트가 등록되었습니다!");
      void router.push("/project/add");
    } catch (error) {}
  };

  return (
    <Wrapper>
      <Title>프로젝트 등록 페이지</Title>
      <ProjectType>
        {type.map((el: { name: string }, index: number) => (
          <span
            key={index}
            id={el.name}
            className={isType === el.name ? "on" : ""}
            onClick={onClickType(el.name)}
          >
            {el.name}
          </span>
        ))}
      </ProjectType>
      <Project>
        <Item>
          <ItemName>num</ItemName>
          <ItemInput type="text" id="num" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>startDate</ItemName>
          <ItemInput type="text" id="startDate" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>endDate</ItemName>
          <ItemInput type="text" id="endDate" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>title</ItemName>
          <ItemInput type="text" id="title" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>thumb</ItemName>
          <ItemInput type="text" id="thumb" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>cont_unit</ItemName>
          <ItemInput type="text" id="unit" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>cont_optimization</ItemName>
          <ItemInput type="text" id="optimization" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>cont_percent</ItemName>
          <ItemInput type="text" id="percent" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>view_code</ItemName>
          <ItemInput type="text" id="percent" onChange={onChangeContent} />
        </Item>
        <Item>
          <ItemName>view_page</ItemName>
          <ItemInput type="text" id="page" onChange={onChangeContent} />
        </Item>
      </Project>
      <ProjectBtn onClick={onClickSubmit}>등록하기</ProjectBtn>
    </Wrapper>
  );
}
