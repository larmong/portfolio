import {
  BtnWrapper,
  Cont,
  Contents,
  Date,
  Project,
  Skills,
  Thumb,
  Title,
  ViewBtn,
  Wrapper,
} from "./Item.style";
import { FaCodepen, FaGithub } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { ITypeProject } from "../../../../commons/server/json/json.types";
import { IPropsProjectItem } from "./Item.types";
import AllIcon from "./icon/Icon.container";
import { FiImage } from "react-icons/fi";
import { MdWeb } from "react-icons/md";

export default function ProjectItem(props: IPropsProjectItem) {
  const onClickMoveToView = (url: string) => () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Wrapper>
      {props.data.map((el: ITypeProject, index: number) => (
        <Slide key={index} triggerOnce={true} direction="up" cascade={true}>
          <Contents>
            <Thumb></Thumb>
            <Project>
              <Title>{el.title}</Title>
              <Date>{`${el.startDate} ~ ${el.endDate}`}</Date>
              <Cont>{el.cont}</Cont>
              <Skills>
                {el.skills.map((skill: string, num: number) => (
                  <AllIcon key={num} skill={skill} />
                ))}
              </Skills>
              {el.categoryId === "Animation" || el.categoryId === "Design" ? (
                <BtnWrapper>
                  <ViewBtn
                    className="view"
                    onClick={onClickMoveToView(el.view.page)}
                  >
                    {el.categoryId === "Animation" ? (
                      <FaCodepen />
                    ) : (
                      <FiImage />
                    )}
                    VIEW
                  </ViewBtn>
                </BtnWrapper>
              ) : (
                <BtnWrapper>
                  <ViewBtn onClick={onClickMoveToView(el.view.code)}>
                    <FaGithub />
                    CODE VIEW
                  </ViewBtn>
                  <ViewBtn onClick={onClickMoveToView(el.view.page)}>
                    <MdWeb />
                    PAGE VIEW
                  </ViewBtn>
                </BtnWrapper>
              )}
            </Project>
          </Contents>
        </Slide>
      ))}
    </Wrapper>
  );
}
