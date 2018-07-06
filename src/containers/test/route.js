import React,{Fragment} from 'react'
import { combineReducers } from 'redux-immutable'
import { Route } from 'react-router'
import Immutable from 'immutable';
import reducerTest from './reducers/reducer-test'
import { key_test, key_test_inner} from '@/constants'

const loader = (store, nextState, cb, module, key, rdcr) => {
    if(key && rdcr){
        const originState = store.getState()
        const newState = originState.get(key) ? originState : originState.set(key,Immutable.Map({}))
        store.reset(combineReducers({...store._reducers,[key]: rdcr}), newState)
    }
    cb(null, module.default);
}
//异步加载test模块，重置store
const testLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('./views/index').then(module => {
        loader(store, nextState, cb, module, key_test, reducerTest)
    })
}

const innerLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('./views/inner').then(module => {
        loader(store, nextState, cb, module, key_test_inner)
    })
}

export default store => {
    return <Fragment key={Math.random()}>
    		<Route key='_test' path='/test' getComponent={(nextState, cb) => {testLoader(store, nextState, cb)}}/>
    		<Route key='_test_inner' path='/test/inner/:name' getComponent={(nextState, cb) => {innerLoader(store, nextState, cb)}}/>
    	</Fragment>

}
