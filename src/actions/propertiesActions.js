export const actionTypes = {
  SET_PROPERTIES: "SET_PROPERTIES",
  ADD_PROPERTY: "ADD_PROPERTY",
  EDIT_PROPERTY: "EDIT_PROPERTY",
  DELETE_PROPERTY: "DELETE_PROPERTY",
};

export function setProperties(properties) {
  return { type: actionTypes.SET_PROPERTIES, properties };
}

export function addProperty(property) {
  return { type: actionTypes.ADD_PROPERTY, property };
}

export function editPropertyAction(property) {
  return { type: actionTypes.EDIT_PROPERTY, property };
}

export function deleteProperty(property) {
  return { type: actionTypes.DELETE_PROPERTY, property };
}
