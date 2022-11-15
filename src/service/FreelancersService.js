import axios from "axios";

const urlFreelancers = "https://codify-api.herokuapp.com/freelancers";

export const loginUser = async (email, password) => {
  return await axios.get(
    `${urlFreelancers}?email=${email}&password=${password}`
  );
};

export const getAllFreelancers = async (id) => {
  id = id || "";
  return await axios.get(`${urlFreelancers}/${id}`);
};

export const getFreelancerEmail = async (email) => {
  return await axios.get(`${urlFreelancers}?email=${email}`);
};

export const addFreelancer = async (user) => {
  return await axios.post(urlFreelancers, user);
};

export const editFreelancer = async (id, user) => {
  return await axios.put(`${urlFreelancers}/${id}`, user);
};

export const deleteFreelancer = async (id) => {
  return await axios.delete(`${urlFreelancers}/${id}`);
};
