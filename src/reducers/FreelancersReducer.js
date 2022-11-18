import { actionTypes } from "actions/FreelancersAction";

const freelancersState = [];
let index;

export default function FreelancersReducer(state = freelancersState, action) {
  switch (action.type) {
    // LOGIN
    case actionTypes.SET_LOGGEDIN:
      return action.loggedIn;
    // SET
    case actionTypes.SET_FREELANCERS:
      return action.freelancers;

    // ADD
    case actionTypes.ADD_FREELANCER:
      return [
        ...state,
        { ...action.freelancerDetails, id: action.freelancerDetails.id },
      ];
    // EDIT
    case actionTypes.EDIT_FREELANCER:
      index = state.findIndex((mod) => mod.id === action.freelancerDetails.id);

      return [
        ...state.slice(0, index), // everything before current item
        action.freelancerDetails,
        ...state.slice(index + 1), // everything after current item
      ];
    // DELETE
    case actionTypes.DELETE_FREELANCER:
      index = state.findIndex((mod) => mod.id === action.freelancerDetails.id);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    default:
      return state;
  }
}
