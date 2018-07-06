import {login} from '../actionType'
import Immutable from 'immutable';

export const userLogin = (name, psw) => ({
	type: login,
	data: Immutable.Map({name:name,psw:psw})
});