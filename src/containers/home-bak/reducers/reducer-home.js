import {getData,getPros} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const initHome = (domain, action) => {
	return domain.withMutations(immu_item => {
		immu_item.set('homeSale',action.homeData).set('products',action.proData)
	})
  // return domain.set('homeSale',action.data);
};

const initPros = (domain, action) => {
  return domain.set('products',action.data);
};

export default createReducer(initialState, {
  [getData]:initHome,
  [getPros]:initPros
});