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
import { FiImage } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { Slide } from "react-awesome-reveal";
import { IPropsProjectItem } from "./Item.types";
import { ITypeProject } from "../../../../commons/libraries/firebase/data.types";
import AllIcon from "./icon/Icon.container";

export default function ProjectItem(props: IPropsProjectItem) {
  const onClickMoveToView = (url: string) => () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Wrapper>
      {props.data.map((el: ITypeProject, index: number) => (
        <Slide key={index} triggerOnce={true} direction="up" cascade={true}>
          <Contents>
            <Thumb>
              <img src={el.thumb} alt="썸네일" />
            </Thumb>
            <Project>
              <Title>{el.title}</Title>
              <Date>
                {el.date === undefined
                  ? `${el.startDate} ~ ${el.endDate}`
                  : el.date}
              </Date>
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
