import { combineReducers } from "redux";
import clients from "../reducers/ClientsReducer";
import freelancers from "../reducers/FreelancersReducer";
import projects from "../reducers/ProjectReducer";

const rootReducer = combineReducers({ clients, freelancers, projects });
export default rootReducer;
