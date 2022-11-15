import { actionTypes } from "../actions/ProjectActions";

const projectsState = [];
let index;

export default function ProjectsReducer(state = projectsState, action) {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return action.projects;
    case actionTypes.ADD_PROJECT:
      return [
        { ...action.projectDetails, idNo: action.projectDetails.id },
        ...state,
      ];
    case actionTypes.EDIT_PROJECT:
      index = state.findIndex((mod) => mod.idNo === action.projectDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        action.projectDetails,
        ...state.slice(index + 1), // everything after current item
      ];
    case actionTypes.DELETE_PROJECT:
      index = state.findIndex((mod) => mod.idNo === action.projectDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    case actionTypes.APPROVE_PROJECT:
      index = state.findIndex((mod) => mod.idNo === action.projectDetails.idNo);
      index = state.findIndex((mod) => mod.idNo === action.projectDetails.idNo);

      return [
        ...state.slice(0, index), // everything before current item
        ...state.slice(index + 1), // everything after current item
      ];
    default:
      return state;
  }
}
