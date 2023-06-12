interface Item {
  page: string;
  active: boolean;
  sub_page: { page: string; active: boolean }[];
}

//parent page
const sideMenu = (state: any[], page: string) =>
  state.map((item: Item) => ({
    ...item,
    active: item.page === page && !item.active,
  }));

//sub page
const subPageActive = (state: any[], page: string) =>
  state.map((item: Item) => ({
    ...item,
    sub_page: sideMenu(item.sub_page, page),
    active: false,
  }));

export { sideMenu, subPageActive };
