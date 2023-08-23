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
} from "./All.style";
import { FaGithub } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { Slide } from "react-awesome-reveal";
import { ITypeProject } from "./All.types";
import AllIcon from "./icon/Icon.container";

export default function All() {
  const project: ITypeProject[] = [
    {
      startDate: "2023-02-12",
      endDate: "2023-03-02",
      title: "따릉이 클라이언트",
      thumb: "",
      cont: "웹표준을 준수하여 만든사이트입니다. 웹사이트에서 가장 많이 사용되는 팝업, 탭메뉴, 게시판, 슬라이더등의 다양한 기능을 웹표준에 맞게 제작한 사이트입니다. 따릉이 홈페이지를 리디자인하여 만든 페이지입니다. UI/UX 인 피그마를 사용하였습니다.",
      skills: ["design", "react", "next", "node", "firebase", "graphql"],
      view: {
        code: "https://github.com/larmong/bike-finder",
        page: "https://bike-finder-larmong.netlify.app/",
      },
    },
    {
      startDate: "2023-02-12",
      endDate: "2023-03-02",
      title: "따릉이 어드민페이지",
      thumb: "",
      cont: "웹표준을 준수하여 만든사이트입니다. 웹사이트에서 가장 많이 사용되는 팝업, 탭메뉴, 게시판, 슬라이더등의 다양한 기능을 웹표준에 맞게 제작한 사이트입니다. 따릉이 홈페이지를 리디자인하여 만든 페이지입니다. UI/UX 인 피그마를 사용하였습니다.",
      skills: ["design", "react", "next", "node", "firebase"],
      view: {
        code: "https://github.com/larmong/bikefinder-admin",
        page: "https://bikefinder-admin.netlify.app/",
      },
    },
    {
      startDate: "2023-02-12",
      endDate: "2023-03-02",
      title: "2023 포트폴리오",
      thumb: "",
      cont: "웹표준을 준수하여 만든사이트입니다. 웹사이트에서 가장 많이 사용되는 팝업, 탭메뉴, 게시판, 슬라이더등의 다양한 기능을 웹표준에 맞게 제작한 사이트입니다. 따릉이 홈페이지를 리디자인하여 만든 페이지입니다. UI/UX 인 피그마를 사용하였습니다.",
      skills: ["react", "emotion"],
      view: {
        code: "https://github.com/larmong/portfolio",
        page: "https://larmong.site/",
      },
    },
  ];

  const onClickMoveToView = (url: {}) => () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Wrapper>
      {project.map((el: ITypeProject, index: number) => (
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
              <BtnWrapper>
                <ViewBtn
                  className="btn6"
                  onClick={onClickMoveToView(el.view.code)}
                >
                  <FaGithub />
                  CODE VIEW
                </ViewBtn>
                <ViewBtn
                  className="btn6"
                  onClick={onClickMoveToView(el.view.page)}
                >
                  <FaGithub />
                  PAGE VIEW
                </ViewBtn>
              </BtnWrapper>
            </Project>
          </Contents>
        </Slide>
      ))}
    </Wrapper>
  );
}
