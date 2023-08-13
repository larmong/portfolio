export interface IPropsTab {
  tabList: ITypeTabList[];
  tabTitle: ITypeTabTitle;
}

export interface ITypeTabList {
  title: string;
  contents: string;
  number: string;
  view: boolean;
}

export interface ITypeTabTitle {
  icon: any;
  title: string;
}
