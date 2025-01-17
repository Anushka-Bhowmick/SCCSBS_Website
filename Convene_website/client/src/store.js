import  {combineReducers} from 'redux'

import {createStore, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import{composeWithDevTools} from 'redux-devtools-extension'
import { getAllEventsReducer } from './reducers/eventReducers'

const finalReducer = combineReducers({
    getAllEventsReducer : getAllEventsReducer
})
const initialState ={}
const composeEnhancer= composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store