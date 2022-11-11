import axios from "axios";

const urlUser = "https://capstone-server-two.herokuapp.com/users";

export const loginUser = async (email, password) => {
  return await axios.get(`${urlUser}?email=${email}&password=${password}`);
};

export const getAllUsers = async (idNo) => {
  idNo = idNo || "";
  return await axios.get(`${urlUser}/${idNo}`);
};

export const getUserEmail = async (email) => {
  return await axios.get(`${urlUser}?email=${email}`);
};

export const addUser = async (user) => {
  return await axios.post(urlUser, user);
};

export const editUser = async (idNo, user) => {
  return await axios.put(`${urlUser}/${idNo}`, user);
};

export const deleteUser = async (idNo) => {
  return await axios.delete(`${urlUser}/${idNo}`);
};
