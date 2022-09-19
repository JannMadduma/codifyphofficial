import { actionTypes } from "../actions/loggedInActions";

const loggedIn = {};

export default function loggedInReducer(state = loggedIn, action) {
  switch (action.type) {
    case actionTypes.SET_LOGGEDIN:
      return action.loggedIn;
    default:
      return state;
  }
}
