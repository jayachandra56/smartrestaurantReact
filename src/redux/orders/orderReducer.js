import { ADD_ORDER_ITEMS, CLEAR_ORDER_ITEMS } from "../constants"


const initialStateOrders={
    MyOrdersList:[]
}

export const ordersReducer=(state=initialStateOrders,action)=>{
    switch(action.type){
        case ADD_ORDER_ITEMS:{
            return{
                MyOrdersList:action.payload
            }
        }
        case CLEAR_ORDER_ITEMS:{
            return{
                MyOrdersList:[]
            }
        }
        default:return  state;
    }
}

