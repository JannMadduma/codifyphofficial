import axios from "axios";

const urlFreelancer = "https://codify-api.herokuapp.com/freelancers";

export const loginFreelancer = async (email, password) => {
  return await axios.get(
    `${urlFreelancer}?email=${email}&password=${password}`
  );
};

export const getAllFreelancers = async (idNo) => {
  idNo = idNo || "";
  return await axios.get(`${urlFreelancer}/${idNo}`);
};

export const getFreelancerEmail = async (email) => {
  return await axios.get(`${urlFreelancer}?email=${email}`);
};

export const addFreelancer = async (user) => {
  return await axios.post(urlFreelancer, user);
};

export const editFreelancer = async (idNo, user) => {
  return await axios.put(`${urlFreelancer}/${idNo}`, user);
};

export const deleteFreelancer = async (idNo) => {
  return await axios.delete(`${urlFreelancer}/${idNo}`);
};
