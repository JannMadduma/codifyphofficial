import axios from "axios";

const urlProperty = "https://capstone-server-two.herokuapp.com/subscribed";

export const getVipEmail = async (email) => {
  return await axios.get(`${urlUser}?email=${email}`);
};

export const addVipEmail = async (user) => {
  return await axios.post(urlUser, user);
};
