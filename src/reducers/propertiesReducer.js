import { actionTypes } from "../actions/propertiesActions";

const propertiesState = [];
let index;

export default function propertiesReducer(state = propertiesState, action) {
  switch (action.type) {
    case actionTypes.SET_PROPERTIES:
      return action.projects;
    case actionTypes.ADD_PROPERTY:
      return [action.project, ...state];
    case actionTypes.EDIT_PROPERTY:
      index = state.findIndex((mod) => mod.idNo === action.project.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        action.project,
        ...state.slice(index + 1), // everything after current item
      ];
    case actionTypes.DELETE_PROPERTY:
      index = state.findIndex((mod) => mod.idNo === action.project.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    default:
      return state;
  }
}
