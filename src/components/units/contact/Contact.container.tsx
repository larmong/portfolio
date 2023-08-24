import { Page, Wrapper } from "./Contact.style";

export default function Contact() {
  const onClickMoveToPage = (name: string) => () => {
    console.log(name);
    if (name === "github") {
      window.open("https://github.com/larmong", "_blank");
    } else if (name === "velog") {
      window.open("https://velog.io/@larmong", "_blank");
    } else if (name === "portfolio") {
      alert("준비중입니다!");
    } else if (name === "pdf") {
      alert("준비중입니다!");
    }
  };

  return (
    <Wrapper>
      <Page>
        <h5>GitHub</h5>
        <p>프로젝트 코드</p>
        <span onClick={onClickMoveToPage("github")}>Click!</span>
      </Page>
      <Page>
        <h5>Velog</h5>
        <p>개발 기록</p>
        <span onClick={onClickMoveToPage("velog")}>Click!</span>
      </Page>
      <Page>
        <h5>Portfolio</h5>
        <p>2021.var</p>
        <span onClick={onClickMoveToPage("portfolio")}>Click!</span>
      </Page>
      <Page>
        <h5>Pdf</h5>
        <p>간단 이력서</p>
        <span onClick={onClickMoveToPage("pdf")}>Click!</span>
      </Page>
    </Wrapper>
  );
}
