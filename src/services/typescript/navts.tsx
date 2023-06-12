export interface SideBarTypes {
  page: string;
  icon: any;
  path: string;
  active: boolean;
  sub_page: SubPageTypes[];
}

export interface SubPageTypes {
  page: string;
  path: string;
  active: boolean;
  staff?: Staff[];
}

export interface Staff {
  job: string;
  path: string;
}
