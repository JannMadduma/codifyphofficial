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

export const addFreelancer = async (freelancer) => {
  return await axios.post(urlFreelancer, freelancer);
};

export const editFreelancer = async (idNo, freelancer) => {
  return await axios.put(`${urlFreelancer}/${idNo}`, freelancer);
};

export const deleteFreelancer = async (idNo) => {
  return await axios.delete(`${urlFreelancer}/${idNo}`);
};
