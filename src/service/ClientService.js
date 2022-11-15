import axios from "axios";

const clientSURL = "http://127.0.0.1:8000/api/clients";
const clientAddURL = "http://127.0.0.1:8000/api/add-client";
const clientDeleteURL = "http://127.0.0.1:8000/api/delete-client";
const clientEditURL = "http://127.0.0.1:8000/api/update-client";
const searchClientsURL = "http://127.0.0.1:8000/api/clients";
const deleteClientsURL = "http://127.0.0.1:8000/api/clients";

export const getAllClients = async (id) => {
  id = id || "";
  return await axios.get(`${clientSURL}/${id}`);
};

export const searchClients = async (search) => {
  return await axios.get(`${searchClientsURL}?q=${search}`);
};

export const addClients = async (clientDetails) => {
  return await axios.post(clientAddURL, clientDetails);
};

export const editClients = async (id, clientDetails) => {
  return await axios.put(`${clientEditURL}/${id}`, clientDetails);
};

export const deleteClients = async (id) => {
  return await axios.delete(`${clientDeleteURL}/${id}`);
};
