import { Copy, PageIcon, Pages, Wrapper } from "./Footer.style";
import { SiVelog } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <Wrapper>
      <Pages>
        <PageIcon>
          <BsGithub />
        </PageIcon>
        <PageIcon>
          <SiVelog />
        </PageIcon>
        <PageIcon>
          <MdMail />
        </PageIcon>
      </Pages>
      <Copy>copyright ⓒ 2023 All rights reserved by larmong.</Copy>
    </Wrapper>
  );
}
