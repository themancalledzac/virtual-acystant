import { combineReducers } from "redux";
import loginSignupSwitch from "./loginSignupSwitch";
import loginUserState from "./loginUserState";
import probabilityDataState from "./probabilityDataState";

const allReducer = combineReducers({
  // name our reducers here
  loginUserState,
  loginSignupSwitch,
  probabilityDataState,
});

export default allReducer;