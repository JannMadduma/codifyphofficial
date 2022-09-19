export const actionTypes = {
  SET_USERS: 'SET_USERS',
  ADD_USER: 'ADD_USER',
  EDIT_USER: 'EDIT_USER',
  DELETE_USER: 'DELETE_USER',
};

export function setUsers(users) {
  return { type: actionTypes.SET_USERS, users };
}

export function addUser(user) {
  return { type: actionTypes.ADD_USER, user };
}

export function editUser(user) {
  return { type: actionTypes.EDIT_USER, user };
}

export function deleteUser(user) {
  return { type: actionTypes.DELETE_USER, user };
}
