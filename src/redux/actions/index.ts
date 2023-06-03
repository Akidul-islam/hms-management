import {
  SIDE_MENU_OPEN,
  SUB_LINK_ACTIVE,
  TOGGLE_BUTTON,
} from '../actions/actionTypes';

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
