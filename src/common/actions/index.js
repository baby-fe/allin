import {login,load_show,load_hide} from '../actionType'
import Immutable from 'immutable';

export const commonLogin = (name, psw) => ({
	type: login,
	data: Immutable.Map({name:name,psw:psw})
});

export const loading = () => ({
	type: load_show,
	data: Immutable.Map({})
});

export const loadhide = (name, psw) => ({
	type: load_hide,
	data: Immutable.Map({name:name,psw:psw})
});