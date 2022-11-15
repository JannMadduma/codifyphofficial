export const actionTypes = {
  SET_PROJECTS: "SET_PROJECTS",
  ADD_PROJECT: "ADD_PROJECT",
  EDIT_PROJECT: "EDIT_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
  APPROVE_PROJECT: "APPROVE_PROJECT",
};

export function setProjects(projects) {
  return { type: actionTypes.SET_PROJECTS, projects };
}

export function addProjectAction(projectDetails) {
  return { type: actionTypes.ADD_PROJECT, projectDetails };
}

export function editProjectAction(projectDetails) {
  return { type: actionTypes.EDIT_PROJECT, projectDetails };
}

export function deleteProjectAction(projectDetails) {
  return { type: actionTypes.DELETE_PROJECT, projectDetails };
}

export function approveProjecAction(projectDetails) {
  return { type: actionTypes.APPROVE_PROJECT, projectDetails };
}
