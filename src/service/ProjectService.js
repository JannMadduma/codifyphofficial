import axios from "axios";

const projectURL = "https://codify-api.herokuapp.com/projects";

export const getAllProjects = async (id) => {
  id = id || "";
  return await axios.get(`${projectURL}/${id}`);
};

export const addProjects = async (projectsDetails) => {
  return await axios.post(projectURL, projectsDetails);
};

export const editProjects = async (id, projectsDetails) => {
  return await axios.put(`${projectURL}/${id}`, projectsDetails);
};

export const deleteProjects = async (id) => {
  return await axios.delete(`${projectURL}/${id}`);
};

export const approveProjects = async (id) => {
  return await axios.approve(`${projectURL}/${id}`);
};
