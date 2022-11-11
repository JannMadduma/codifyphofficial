export const actionTypes = {
  SET_LOGGEDIN: "SET_LOGGEDIN",
};

export function setLoggedIn(freelancer) {
  return {
    type: actionTypes.SET_LOGGEDIN,
    loggedIn: freelancer,
  };
}
