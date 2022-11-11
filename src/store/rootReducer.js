import { combineReducers } from "redux";
import users from "../reducers/usersReducer";
import loggedIn from "../reducers/loggedInReducer";
import projects from "../reducers/propertiesReducer";

const rootReducer = combineReducers({
  users,
  loggedIn,
  projects,
});

export default rootReducer;
