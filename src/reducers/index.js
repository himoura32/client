import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
