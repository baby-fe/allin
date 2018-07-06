import {getDetail,setDetail} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const initDetail = (domain, action) => {
  return domain.set('productDetail',action.data);
};

export default createReducer(initialState, {
  [setDetail]:initDetail
});