import { combineReducers } from "redux";
import loginSignupSwitch from "./loginSignupSwitch";
import loginUserState from "./loginUserState";
import probabilityDataState from "./probabilityDataState";

// import all our reducers here

const allReducer = combineReducers({
  // name our reducers here
  loginUserState,
  loginSignupSwitch,
  probabilityDataState,
});

export default allReducer;
