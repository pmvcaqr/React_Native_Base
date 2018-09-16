import { combineReducers } from "redux";
import settingReducers from '../features/settings/reducers';
import termConditionReducers from "../features/term_condition/reducers";

export default combineReducers({
  settingReducers,
  termConditionReducers
});
