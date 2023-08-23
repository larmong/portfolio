export interface ITypeProject {
  startDate: string;
  endDate: string;
  title: string;
  thumb: string;
  cont: string;
  skills: string[];
  view: ITypeView;
}

export interface ITypeView {
  code: string;
  page: string;
}
