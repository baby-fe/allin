const RESET_ACTION_TYPE = '@@RESET';
const resetReducerCreater = (reducer, resetState) => (state, action) => {
    if (action.type === RESET_ACTION_TYPE) {
        return resetState;
    } else {
        return reducer(state, action);
    }
}
//store增强器，路由切换时重置store
const reset = (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    const reset = (resetReducer, resetState) => {
        const newReducer = resetReducerCreater(resetReducer, resetState);
        store.replaceReducer(newReducer);
        store.dispatch({
            type: RESET_ACTION_TYPE,
            state: resetState
        });
    };
    return { ...store,
        reset
    }
}
 const logAction = store => next => action => {
    console.log('action enhancer:',action)
    next(action)
 }
export  {reset,logAction};