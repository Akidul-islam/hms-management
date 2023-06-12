import { useDispatch } from 'react-redux';
import { actionCreator } from '../../services/store/actions/navigationAction';
import {
  HIDE_SIDEBAR,
  HIDE_SUBMENU,
} from '../../services/store/constants/navigationTypes';

const useNavHandler = () => {
  const dispatch = useDispatch();
  const hideHoverLink = () => {
    dispatch(actionCreator(HIDE_SUBMENU));
  };
  const hideSidebar = () => {
    dispatch(actionCreator(HIDE_SIDEBAR));
  };
  return { hideHoverLink, hideSidebar };
};

export default useNavHandler;
