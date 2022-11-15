import axios from "axios";

const projectURL = "http://127.0.0.1:8000/api/project";
const projectAddURL = "http://127.0.0.1:8000/api/add-project";
const projectDeleteURL = "http://127.0.0.1:8000/api/delete-project";
const projectEditURL = "http://127.0.0.1:8000/api/update-project";
const projectApproveURL = "http://127.0.0.1:8000/api/update-project";

export const getAllProjects = async (id) => {
  id = id || "";
  return await axios.get(`${projectURL}/${id}`);
};

export const addProjects = async (projectsDetails) => {
  return await axios.post(projectAddURL, projectsDetails);
};

export const editProjects = async (id, projectsDetails) => {
  return await axios.put(`${projectEditURL}/${id}`, projectsDetails);
};

export const deleteProjects = async (id) => {
  return await axios.delete(`${projectDeleteURL}/${id}`);
};

export const approveProjects = async (id) => {
  return await axios.approve(`${projectApproveURL}/${id}`);
};
