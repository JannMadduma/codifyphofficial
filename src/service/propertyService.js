import axios from 'axios';

const urlProperty = 'http://127.0.0.1:8000/properties';

export const getAllProperties = async (id) => {
  id = id || '';
  return await axios.get(`${urlProperty}/${id}`);
};

export const addProperty = async (property) => {
  return await axios.post(urlProperty, property);
};

export const editProperty = async (id, property) => {
  return await axios.put(`${urlProperty}/${id}`, property);
};

export const deleteProperty = async (id) => {
  return await axios.delete(`${urlProperty}/${id}`);
};
