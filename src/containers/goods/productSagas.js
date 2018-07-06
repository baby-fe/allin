import { takeEvery, takeLatest, take, call, put, fork, race } from 'redux-saga/effects'
import Immutable from 'immutable';
import {getDetail, setDetail} from './actionType'
import StaticLoading from '@/components/loading/staticLoading'
import {post} from '@/service'

function* getProDetail(){
	while(true){
		const action = yield take(getDetail)
    StaticLoading.show()
    const data = {saleGoodsId:action.data}
    const res = yield call(fetchData,{url:`/ygg-hqbs/goods/info`,data:data})
    StaticLoading.remove()
    yield put({type:setDetail,data:Immutable.fromJS(res)})
	}
}
/**
 * async fetch
 * @param {[type]} param         [description]
 * @yield {[type]} [description]
 */
function* fetchData(param){
	const response = yield post(param.url,param.data)
	return response
}

export default function* productSagas () {
	yield fork(getProDetail)
}
