import axios from "axios";

const urlVip = "https://capstone-server-two.herokuapp.com/subscribed";

export const getVipEmail = async (email) => {
  return await axios.get(`${urlVip}?email=${email}`);
};

export const addVipEmail = async (user) => {
  return await axios.post(urlVip, user);
};
