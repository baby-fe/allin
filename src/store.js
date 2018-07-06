import {
    applyMiddleware,
    compose,
    createStore
} from 'redux'
import {
    routerMiddleware,
    routerReducer
} from 'react-router-redux'
import {
    combineReducers
} from 'redux-immutable';
import createSagaMiddleware from 'redux-saga'
import homeSagas from './containers/home/sagas/homeSagas';
import {logAction,reset} from './enhancer/reset.js';
import homeReducer from '@/containers/home/reducers/homeReducer'
import {
    reducerLogin
} from '@/common/reducers'
import {
    key_home,
    key_login
} from '@/constants'

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware._sagaList = []
export const asyncRunSaga = (name, sagas) => {
    if (!name) {
        window.Error('please set a saga name!')
        return
    }
    if (sagaMiddleware._sagaList.indexOf(name) < 0) {
        sagaMiddleware._sagaList.push(name)
        sagaMiddleware.run(sagas)
    }else{
        window.Error('this saga name already exist!')
        return
    }
}
/**
 * @param  {state}
 * @param  {history}
 * @return {store}
 */
export default (iInitialState, history) => {
    // const asyncReducers  = require.context('../containers', true, /^\.\/\S+\/redux\/reducer\.js$/)
    const middleware = [logAction,sagaMiddleware, routerMiddleware(history)];
    const originalReducers = {
        routing: routerReducer,
        [key_home]: homeReducer,
    }
    // const enhancers = [];
    const storeEnhancers = compose(reset,  applyMiddleware(...middleware), (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f)
    const store = createStore(combineReducers(originalReducers), iInitialState, storeEnhancers);
    asyncRunSaga('HOME', homeSagas)
    store._reducers = originalReducers;
    return store;
}
