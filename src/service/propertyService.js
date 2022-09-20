import axios from "axios";

const urlProperty = "http://127.0.0.1:8000/properties";

export const getAllProperties = async (id, name, location, lotArea) => {
  id = id || "";
  let nameFilter = "";
  let locationFilter = "";
  let lotAreaFilter = "";

  if (name) {
    nameFilter = `?propertyName_like=${name}`;
  }
  if (location) {
    if (name) {
      locationFilter += "&";
    } else {
      locationFilter += "?";
    }

    locationFilter += `location_like=${location}`;
  }
  if (lotArea) {
    if (name || location) {
      lotAreaFilter += "&";
    } else {
      lotAreaFilter += "?";
    }

    if (lotArea === 1) {
      lotAreaFilter += `lotArea_gte=30&lotArea_lte=39`;
    } else if (lotArea === 2) {
      lotAreaFilter += `lotArea_gte=40&lotArea_lte=69`;
    } else if (lotArea === 3) {
      lotAreaFilter += `lotArea_gte=70`;
    }
  }

  return await axios.get(
    `${urlProperty}/${id}${nameFilter}${locationFilter}${lotAreaFilter}`
  );
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
