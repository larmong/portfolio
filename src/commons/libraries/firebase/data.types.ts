export interface ITypeProject {
  id?: string;
  categoryId: string;
  date?: string;
  startDate?: string;
  endDate?: string;
  title: string;
  thumb: string;
  cont: string;
  skills: string[];
  view: ITypeView;
  num: number;
}

export interface ITypeView {
  code: string;
  page: string;
}
