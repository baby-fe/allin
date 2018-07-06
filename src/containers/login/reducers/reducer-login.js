import {login} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';
import _storage from '@/utils/storage-lite';
import {
    key_login
} from '@/constants'

const initialState = Immutable.fromJS({});

const userlogin = (immu_domain, action) => {
	console.log(immu_domain)
	const immu_domainUpdated = immu_domain.withMutations((immu_item) => {
		immu_item.set('status',true).set('username',action.data.get('name'))
	})
	_storage.set([key_login],{accountname:action.data.get('name')})
  return immu_domainUpdated;
};

export default createReducer(initialState, {
  [login]:userlogin
});