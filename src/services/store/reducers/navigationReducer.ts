import { sidebar } from '../../../staticData/navigation';
import { SideBarTypes } from '../../typescript/navts';
import {
  HIDE_SIDEBAR,
  HIDE_SUBMENU,
  IS_SUB_LINK,
  SIDE_MENU_OPEN,
  SUB_LINK_ACTIVE,
  TOGGLE_BUTTON,
} from '../constants/navigationTypes';
import { sideMenu, subPageActive } from '../utiles/navigationUtile';
// nav data impkort
interface State {
  asideLink: SideBarTypes[];
  isToggling: boolean;
  isSubLink: boolean;
  location: any;
  page: any;
}
const initialState: State = {
  asideLink: sidebar,
  isToggling: true,
  isSubLink: false,
  location: {},
  page: {},
};

const navgiationReducer = (
  state = initialState,
  action: { type: string; page: string; cordinate: any }
) => {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return { ...state, isToggling: !state.isToggling };

    case SIDE_MENU_OPEN:
      return { ...state, asideLink: sideMenu(state.asideLink, action.page) };

    case SUB_LINK_ACTIVE:
      return {
        ...state,
        asideLink: subPageActive(state.asideLink, action.page),
      };

    case IS_SUB_LINK:
      // eslint-disable-next-line no-case-declarations
      const page = state.asideLink.find(
        (item: { page: string }) => item.page === action.page
      );
      return { ...state, isSubLink: true, location: action.cordinate, page };

    case HIDE_SUBMENU:
      return { ...state, isSubLink: false };
    case HIDE_SIDEBAR:
      return { ...state, isToggling: true };
    default:
      return state;
  }
};

export default navgiationReducer;
