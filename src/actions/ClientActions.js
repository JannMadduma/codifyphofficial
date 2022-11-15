export const actionTypes = {
  SET_CLIENTSS: "SET_CLIENTSS",
  ADD_CLIENTS: "ADD_CLIENTS",
  EDIT_CLIENTS: "EDIT_CLIENTS",
  DELETE_CLIENTS: "DELETE_CLIENTS",
  APPROVE_CLIENTS: "APPROVE_CLIENTS",
};

export function setClients(clients) {
  return { type: actionTypes.SET_CLIENTSS, clients };
}

export function addClientAction(clientDetails) {
  return { type: actionTypes.ADD_CLIENTS, clientDetails };
}

export function editClientAction(clientDetails) {
  return { type: actionTypes.EDIT_CLIENTS, clientDetails };
}

export function deleteClientAction(clientDetails) {
  return { type: actionTypes.DELETE_CLIENTS, clientDetails };
}

export function approveClientAction(clientDetails) {
  return { type: actionTypes.APPROVE_CLIENTS, clientDetails };
}
