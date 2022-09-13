import { legacy_createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers'
import thunk from 'redux-thunk'

export const store = legacy_createStore(mainReducer, applyMiddleware(thunk))