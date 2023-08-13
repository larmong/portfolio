export interface IPropsTab {
  tabList: ITypeTabList[];
  onClickMoveTab: (title: string) => () => void;
}

export interface ITypeTabList {
  title: string;
  contents: string;
  number: string;
  view: boolean;
}
