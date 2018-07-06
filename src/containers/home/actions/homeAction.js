import {getData,getPros} from '../actionType'
import Immutable from 'immutable';
import {post} from '@/service'

// export const home = (res) => ({
// 	type: getData,
// 	data: Immutable.fromJS(res)
// });

export const products = (res) => ({
	type: getPros,
	data: Immutable.fromJS(res)
});


export const homeInfo = (res) => ({
	type: getData,
	data: Immutable.fromJS(res)
});

// export const getDetail = (par) => (dispatch, getState) => {
// 	post('/ygg-hqbs/homePage/greateSale30').then(res => {
// 		console.log("res:",res)
// 		dispatch(home(res));
// 	})
// 	post('/ygg-hqbs/homePage/recommend').then(res => {
// 		dispatch(products(res));
// 	})
// } 

// export const getProducts = (par) => (dispatch, getState) => {
// 	post('/ygg-hqbs/homePage/recommend').then(res => {
// 		dispatch(products(res));
// 	})
// }