import { ITypeMenuList } from "../header/Header.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsMenu {
  menuList: ITypeMenuList[];
  onClickMoveToMenu: (event: CustomMouseEvent) => void;
}
