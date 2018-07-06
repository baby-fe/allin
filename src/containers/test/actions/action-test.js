import {press} from '../actionType'
import Immutable from 'immutable';
import {post} from '@/service'

export const add = () => ({
	type: press,
	data: 1
});