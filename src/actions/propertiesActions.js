export const actionTypes = {
  SET_PROPERTIES: "SET_PROPERTIES",
  ADD_PROPERTY: "ADD_PROPERTY",
  EDIT_PROPERTY: "EDIT_PROPERTY",
  DELETE_PROPERTY: "DELETE_PROPERTY",
};

export function setProperties(projects) {
  return { type: actionTypes.SET_PROPERTIES, projects };
}

export function addPropertyAction(project) {
  return { type: actionTypes.ADD_PROPERTY, project };
}

export function editPropertyAction(project) {
  return { type: actionTypes.EDIT_PROPERTY, project };
}

export function deletePropertyAction(project) {
  return { type: actionTypes.DELETE_PROPERTY, project };
}
