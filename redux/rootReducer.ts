import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
});

export default rootReducer;
