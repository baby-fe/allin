import {
  takeEvery,
  takeLatest,
  take,
  call,
  put,
  fork,
  race
} from 'redux-saga/effects'
import Immutable from 'immutable';
import {
  getData,
  getPros
} from '../actionType'
import StaticLoading from '@/components/loading/staticLoading'
import {
  post
} from '@/service'

function* getDetail() {
  while (true) {
    const action = yield take(getData)
    StaticLoading.show()
    const [res1, res2] = yield [
      call(fetchData, {
        url: `/ygg-hqbs/homePage/greateSale30`
      }),
      call(fetchData, {
        url: `/ygg-hqbs/homePage/recommend`
      })
    ]
    StaticLoading.remove()
    yield put({
      type: getData,
      homeData: Immutable.fromJS(res1),
      proData: Immutable.fromJS(res2)
    })
    // yield put({type:getPros,data:Immutable.fromJS(res2)})
  }
}

function* getProducts() {
  while (true) {
    const action = yield take(getPros)
    const res = yield call(fetchData, {
      url: `/ygg-hqbs/homePage/recommend`
    })
    yield put({
      type: getPros,
      data: Immutable.fromJS(res)
    })
  }
}
/**
 * async fetch
 * @param {[type]} param         [description]
 * @yield {[type]} [description]
 */
function* fetchData(param) {
  const response = yield post(param.url, param.data)
  return response
}

export default function* homeSagas() {
  yield fork(getDetail)
  yield fork(getProducts)
}
