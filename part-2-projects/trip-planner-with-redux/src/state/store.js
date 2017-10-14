import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'

import * as reducers from './reducers'
const reducer = combineReducers({...reducers})

const logger = createLogger({ collapsed: true });

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))

window.store = store
export default store;
