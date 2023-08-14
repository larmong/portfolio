import { Content, Contents, Wrapper } from "./Page.style";
import { BsGithub } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export default function TabPage() {
  return (
    <Wrapper>
      <Contents>
        <Content triggerOnce={true}>
          <span>
            <BsGithub />
            <SiVelog />
            <FaFilePdf />
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            저는 저의 개발 기록이 담긴 GitHub 페이지와 최근에 시작한 개발
            블로그의 링크를 제공합니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            또한 현재 보고 계신 포트폴리오와는 별개로,
            <br />
            이전에 작업한 웹디자인, 웹사이트를 2021년에 버전의 포트폴리오를 통해
            확인하실 수 있습니다.
          </span>
        </Content>
        <Content triggerOnce={true}>
          <span>
            더불어 간단한 이력서도 PDF 형식으로 다운로드 받으실 수 있습니다! 🤓
          </span>
        </Content>
      </Contents>
    </Wrapper>
  );
}
