import axios from "axios";

const urlFreelancers = "http://127.0.0.1:8000/api/freelancers";
const urlAddFreelancer = "http://127.0.0.1:8000/api/add-freelancer";
const urlEditFreelancer = "http://127.0.0.1:8000/api/update-freelancer";
const urlDeleteFreelancer = "http://127.0.0.1:8000/api/delete-freelancer";

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
  return await axios.post(urlAddFreelancer, user);
};

export const editFreelancer = async (id, user) => {
  return await axios.put(`${urlEditFreelancer}/${id}`, user);
};

export const deleteFreelancer = async (id) => {
  return await axios.delete(`${urlDeleteFreelancer}/${id}`);
};
