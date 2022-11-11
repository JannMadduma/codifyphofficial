import { actionTypes } from "../actions/usersActions";

const usersState = [];
let index;

export default function usersReducer(state = usersState, action) {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return action.users;
    case actionTypes.ADD_USER:
      return [action.freelancer, ...state];
    case actionTypes.EDIT_USER:
      index = state.findIndex((mod) => mod.idNo === action.freelancer.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        action.freelancer,
        ...state.slice(index + 1), // everything after current item
      ];
    case actionTypes.DELETE_USER:
      index = state.findIndex((mod) => mod.idNo === action.freelancer.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    default:
      return state;
  }
}
