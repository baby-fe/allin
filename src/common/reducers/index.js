import {login,load_show,load_hide} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const userlogin = (domain, action) => {
	console.log('domain:',domain)
  return domain;
};

const loading = (domain, action) => {
	console.log('loading:',domain)
  return domain;
};

const loadhide = (domain, action) => {
	console.log('loadhide:',domain)
  return domain;
};
export const reducerLogin = createReducer(initialState, {
  [login]:userlogin,
  [load_show]:loading,
  [load_hide]:loadhide
});