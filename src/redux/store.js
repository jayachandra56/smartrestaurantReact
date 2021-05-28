import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {userReducer} from './user/userReducer'
import {cartReducer} from './cart/cartReducer'

const multipleReducers={
    user:userReducer,
    cart:cartReducer
}

const combineReducer=combineReducers(multipleReducers)
export const store=createStore(combineReducer,applyMiddleware(thunk))