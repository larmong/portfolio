import { Copy, PageIcon, Pages, Wrapper } from "./Footer.style";
import { SiVelog } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export default function Footer() {
  const icon_list = [
    {
      title: "github",
      icon: <BsGithub />,
      url: "https://github.com/larmong",
    },
    {
      title: "velog",
      icon: <SiVelog />,
      url: "https://velog.io/@larmong",
    },
    {
      title: "email",
      icon: <MdMail />,
      url: "",
    },
  ];

  const onClickMoveToSite = (url: string) => () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Wrapper>
      <Pages>
        {icon_list.map((el) => (
          <PageIcon onClick={onClickMoveToSite(el.url)}>{el.icon}</PageIcon>
        ))}
      </Pages>
      <Copy>copyright ⓒ 2023 All rights reserved by larmong.</Copy>
    </Wrapper>
  );
}
