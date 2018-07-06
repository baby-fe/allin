import React,{Fragment} from 'react'
import { combineReducers } from 'redux-immutable'
import { Route } from 'react-router'
import Immutable from 'immutable';
import reducerLogin from './reducers/reducer-login'
import { key_login} from '@/constants'

const loader = (store, nextState, cb, module, key, rdcr) => {
    if(key && rdcr){
        const originState = store.getState()
        const newState = originState.get(key) ? originState : originState.set(key,Immutable.Map({}))
        store.reset(combineReducers({...store._reducers,[key]: rdcr}), newState)
    }
    cb(null, module.default);
}

const loginLoader = (store, nextState, cb) => {
    import('./views/index').then(module => {
        loader(store, nextState, cb, module, key_login, reducerLogin)
    })
}

export default store => {
    return <Fragment key={Math.random()}>
    		<Route key='_login' path='/login' getComponent={(nextState, cb) => {loginLoader(store, nextState, cb)}}/>
    	</Fragment>

}
