import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Immutable from 'immutable';
import _storage from '@/utils/storage-lite';
import createStore from './store'
import router from './router'
import FastClick from 'fastclick'
import {
    key_login
} from '@/constants'
import './css/reset.css'
import './css/base.css'

// _storage.set([key_login],{accountId:1})
// 全局处理移动端 onclick 事件的延迟 300 ms 问题
FastClick.attach(document.body)

let history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

// const iState = _storage.get([key_login]) && _storage.get([key_login]).accountname ? Immutable.fromJS({[key_login]:{status:true}}) : Immutable.fromJS({})
const iState = Immutable.fromJS({})
const store = createStore(iState, history);
store.asyncReducers = {};
const selectLocationState = (state) => {
	return state.get('routing')
}
history = syncHistoryWithStore(history, store, {selectLocationState});
store.subscribe((a, b) => {
    let state = store.getState()
})

ReactDOM.render(
	<Provider store={store}>
        <Router history={history}>
          { router(store) }
        </Router>
    </Provider>,
	document.getElementById('root')
)
