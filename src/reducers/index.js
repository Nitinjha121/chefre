import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import idReducer from "./idReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  data: idReducer,
});

export default rootReducer;
