import axios from "axios";

const urlProjects = "https://codify-api.herokuapp.com/projects";

export const getAllProjects = async (
  idNo,
  Projectname,
  ClientName,
  status,
  isPending
) => {
  idNo = idNo || "";
  let nameFilter = "";
  let locationFilter = "";
  let statusFilter = "";
  let isPendingFilter = "";

  if (Projectname) {
    nameFilter = `&propertyName_like=${Projectname}`;
  }
  if (ClientName) {
    locationFilter += `&location_like=${ClientName}`;
  }
  if (status) {
    statusFilter += `&status_like=${status}`;
  }
  if (isPending) {
    isPendingFilter += `&status_like=${isPending}`;
  }

  return await axios.get(
    `${urlProjects}/${idNo}?_sort=idNo&_order=desc${nameFilter}${locationFilter}${statusFilter}${isPendingFilter}`
  );
};

export const searchProject = async (search) => {
  return await axios.get(`${urlProjects}?q=${search}`);
};

export const addProject = async (project) => {
  return await axios.post(urlProjects, project);
};

export const editProject = async (idNo, project) => {
  return await axios.put(`${urlProjects}/${idNo}`, project);
};

export const deleteProject = async (idNo) => {
  return await axios.delete(`${urlProjects}/${idNo}`);
};
