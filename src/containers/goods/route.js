import React,{Fragment} from 'react'
import { combineReducers } from 'redux-immutable'
import { Route } from 'react-router'
import Immutable from 'immutable';
import reducerGoods from './reducers/reducer-goods'
import { key_goods } from '@/constants'
import { asyncRunSaga } from '@/store'
import productSagas from './productSagas'

const loader = (store, nextState, cb, module, key, rdcr) => {
    if(key && rdcr){
        const originState = store.getState()
        const newState = originState.get(key) ? originState : originState.set(key,Immutable.Map({}))
        store.reset(combineReducers({...store._reducers,[key]: rdcr}), newState)
    }
    cb(null, module.default);
}

const goodsLoader = (store, nextState, cb) => {
    import('./views/index').then(module => {
        asyncRunSaga('GOODS_DETAIL', productSagas)
        loader(store, nextState, cb, module, key_goods, reducerGoods)
    })
}

export default store => {
    return <Fragment key={Math.random()}>
    		<Route key='_goods' path='/goods/:id' getComponent={(nextState, cb) => {goodsLoader(store, nextState, cb)}}/>
    	</Fragment>

}
