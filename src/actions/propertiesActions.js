export const actionTypes = {
  SET_PROPERTIES: 'SET_PROPERTIES',
  ADD_PROPERTY: 'ADD_PROPERTY',
  EDIT_PROPERTY: 'EDIT_PROPERTY',
  DELETE_PROPERTY: 'DELETE_PROPERTY',
};

export function setProperties(users) {
  return { type: actionTypes.SET_PROPERTIES, users };
}

export function addProperty(user) {
  return { type: actionTypes.ADD_PROPERTY, user };
}

export function editProperty(user) {
  return { type: actionTypes.EDIT_PROPERTY, user };
}

export function deleteProperty(user) {
  return { type: actionTypes.DELETE_PROPERTY, user };
}
