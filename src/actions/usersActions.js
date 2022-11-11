export const actionTypes = {
  SET_USERS: "SET_USERS",
  ADD_USER: "ADD_USER",
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER",
};

export function setUsers(users) {
  return { type: actionTypes.SET_USERS, users };
}

export function addFreelancer(freelancer) {
  return { type: actionTypes.ADD_USER, freelancer };
}

export function editUserAction(freelancer) {
  return { type: actionTypes.EDIT_USER, freelancer };
}

export function deleteUserAction(freelancer) {
  return { type: actionTypes.DELETE_USER, freelancer };
}
