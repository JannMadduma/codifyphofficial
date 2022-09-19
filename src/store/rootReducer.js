import { combineReducers } from 'redux';
import users from '../reducers/usersReducer';
import loggedIn from '../reducers/loggedInReducer';
import properties from '../reducers/propertiesReducer';

const rootReducer = combineReducers({
  users,
  loggedIn,
  properties,
});

export default rootReducer;
