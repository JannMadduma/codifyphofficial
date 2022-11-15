import axios from "axios";

const clientSURL = "http://localhost:5000/clients";

export const getAllClients = async (id) => {
  id = id || "";
  return await axios.get(`${clientSURL}/${id}`);
};

export const searchClients = async (search) => {
  return await axios.get(`${clientSURL}?q=${search}`);
};

export const addClients = async (clientDetails) => {
  return await axios.post(clientSURL, clientDetails);
};

export const editClients = async (id, clientDetails) => {
  return await axios.put(`${clientSURL}/${id}`, clientDetails);
};

export const deleteClients = async (id) => {
  return await axios.delete(`${clientSURL}/${id}`);
};
