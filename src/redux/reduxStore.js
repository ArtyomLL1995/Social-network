import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import profileReducer from './profileReducer'
import { dialogsReducer } from './dialogsReducer'
import { friendsReducer } from './friendsReducer'
import {usersReducer} from './usersReducer'
import {authReducer} from './authReducer'
import {appReducer} from './appReducer'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    friendsReducer,
    usersReducer,
    authReducer,
    appReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store


export default store