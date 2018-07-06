import {press} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS([]);

const add = (domain, action) => {
	console.log(action)
  return domain;
};

export default createReducer(initialState, {
  [press]:add
});