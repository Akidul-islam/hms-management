import {
  IS_SUB_LINK,
  SIDE_MENU_OPEN,
  SUB_LINK_ACTIVE,
  TOGGLE_BUTTON,
} from '../constants/navigationTypes';

export const sideBarOpen = (page: string) => ({
  type: SIDE_MENU_OPEN,
  page,
});

export const subLinkActive = (page: string) => ({
  type: SUB_LINK_ACTIVE,
  page,
});
export const toggleFun = () => ({
  type: TOGGLE_BUTTON,
});

export const subLink = (page: string, cordinate: { center: number }) => ({
  type: IS_SUB_LINK,
  cordinate,
  page,
});

export const actionCreator = (actionType: string) => ({
  type: actionType,
});
