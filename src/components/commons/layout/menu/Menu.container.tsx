import { useRouter } from "next/router";
import { MenuItem, MenuWrapper, Wrapper } from "./Menu.style";
import { IPropsMenu } from "./Menu.types";
import { ITypeMenuList } from "../header/Header.types";
import { Fragment } from "react";

export default function Menu(props: IPropsMenu) {
  const router = useRouter();

  return (
    <Wrapper>
      <MenuWrapper>
        {props.menuList.map((el: ITypeMenuList) => (
          <Fragment key={el.title}>
            <MenuItem
              id={el.route}
              className={router.route === el.route ? "on" : ""}
              onClick={props.onClickMoveToMenu}
            >
              {el.title}
            </MenuItem>
          </Fragment>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
