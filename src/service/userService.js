import axios from "axios";

const urlUser = "http://127.0.0.1:8000/user";

export const loginUser = async (email, password) => {
  return await axios.get(`${urlUser}?email=${email}&password=${password}`);
};

export const getAllUsers = async (id) => {
  id = id || "";
  return await axios.get(`${urlUser}/${id}`);
};

export const getUserEmail = async (email) => {
  return await axios.get(`${urlUser}?email=${email}`);
};

export const addUser = async (user) => {
  return await axios.post(urlUser, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`${urlUser}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${urlUser}/${id}`);
};
