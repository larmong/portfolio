import { useRouter } from "next/router";
import { Logo, LogoWrapper, Wrapper, MenuWrapper } from "./Header.style";
import { ITypeMenuList } from "./Header.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import Menu from "../menu/Menu.container";

export default function Header() {
  const router = useRouter();
  const menuList: ITypeMenuList[] = [
    {
      title: "portfolio",
      route: "/",
    },
    {
      title: "about me",
      route: "/aboutme",
    },
    {
      title: "project",
      route: "/project",
    },
    {
      title: "contact",
      route: "/contact",
    },
  ];

  const onClickMoveToMenu = (event: CustomMouseEvent) => {
    void router.push(`${event.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src="images/larmong.svg" alt="larmong" />
      </LogoWrapper>
      <MenuWrapper>
        <Menu menuList={menuList} onClickMoveToMenu={onClickMoveToMenu} />
      </MenuWrapper>
    </Wrapper>
  );
}
