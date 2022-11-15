export const actionTypes = {
  SET_LOGGEDIN: "SET_LOGGEDIN",
  SET_FREELANCERS: "SET_FREELANCERS",
  ADD_FREELANCER: "ADD_FREELANCER",
  EDIT_FREELANCER: "EDIT_FREELANCER",
  DELETE_FREELANCER: "DELETE_FREELANCER",
};

export function setFreelancers(user) {
  return {
    type: actionTypes.SET_LOGGEDIN,
    loggedIn: user,
  };
}

export function addFreelancerAction(freelancerDetails) {
  return { type: actionTypes.ADD_FREELANCER, freelancerDetails };
}

export function editFreelancerAction(freelancerDetails) {
  console.log(freelancerDetails);
  return { type: actionTypes.EDIT_FREELANCER, freelancerDetails };
}

export function deleteFreelancerAction(freelancerDetails) {
  console.log(freelancerDetails);
  return { type: actionTypes.DELETE_FREELANCER, freelancerDetails };
}
