export const actionTypes = {
  SET_LOGGEDIN: 'SET_LOGGEDIN',
};

export function setLoggedIn(user) {
  return { type: actionTypes.SET_LOGGEDIN, user };
}
