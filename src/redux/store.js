import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {userReducer} from './user/userReducer'
import {cartReducer} from './cart/cartReducer'
import {ordersReducer} from './orders/orderReducer'

const multipleReducers={
    user:userReducer,
    cart:cartReducer,
    orders:ordersReducer
}

const combineReducer=combineReducers(multipleReducers)
export const store=createStore(combineReducer,applyMiddleware(thunk))