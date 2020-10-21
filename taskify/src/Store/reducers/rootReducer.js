import authReducer from "./authReducer";
import { combineReducers } from "redux";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer,
});

export default rootReducer;
