import { sidebar } from '../../staticData/navigation';
import { SideBarTypes } from '../../tsScriptTypes';
import {
  SIDE_MENU_OPEN,
  SUB_LINK_ACTIVE,
  TOGGLE_BUTTON,
} from '../actions/actionTypes';
import { sideMenu, subPageActive } from './utilites';
// nav data impkort
interface State {
  asideLink: SideBarTypes[];
  isToggling: boolean;
}
const initialState: State = {
  asideLink: sidebar,
  isToggling: true,
};

const navgiationReducer = (
  state = initialState,
  action: { type: string; page: string }
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
    default:
      return state;
  }
};

export default navgiationReducer;
