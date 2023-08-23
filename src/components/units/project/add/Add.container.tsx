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
    startDate: "",
    endDate: "",
    title: "",
    thumb: "",
    cont: "",
    skills: [""],
    view: {
      code: "",
      page: "",
    },
  });
  const [data2, setData2] = useState({
    date: "",
    title: "",
    thumb: "",
    cont: "",
    skills: [""],
    view: "",
  });

  const onChangeContent = (event: CustomChangeEvent) => {
    if (isType === "Web Page" || isType === "Mobile") {
      if (event.target.id === "code" || event.target.id === "page") {
        setData({
          ...data,
          view: {
            ...data.view,
            [event.target.id]: event.target.value,
          },
        });
      } else {
        setData({
          ...data,
          [event.target.id]: event.target.value,
        });
      }
    } else {
      setData2({
        ...data2,
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
      if (isType === "Web Page" || isType === "Mobile") {
        await setDoc(docRef, {
          categoryId: isType,
          ...data,
        });
      } else {
        await setDoc(docRef, {
          categoryId: isType,
          ...data2,
        });
      }
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

      {isType === "Web Page" || isType === "Mobile" ? (
        <Project>
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
            <ItemName>cont</ItemName>
            <ItemInput type="text" id="cont" onChange={onChangeContent} />
          </Item>
          <Item>
            <ItemName>code</ItemName>
            <ItemInput type="text" id="code" onChange={onChangeContent} />
          </Item>
          <Item>
            <ItemName>page</ItemName>
            <ItemInput type="text" id="page" onChange={onChangeContent} />
          </Item>
        </Project>
      ) : (
        <Project>
          <Item>
            <ItemName>date</ItemName>
            <ItemInput type="text" id="date" onChange={onChangeContent} />
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
            <ItemName>cont</ItemName>
            <ItemInput type="text" id="cont" onChange={onChangeContent} />
          </Item>
          <Item>
            <ItemName>view</ItemName>
            <ItemInput type="text" id="view" onChange={onChangeContent} />
          </Item>
        </Project>
      )}

      <ProjectBtn onClick={onClickSubmit}>등록하기</ProjectBtn>
    </Wrapper>
  );
}
