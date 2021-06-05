import { ADD_ORDER_ITEMS, CLEAR_ORDER_ITEMS,UPDATE_ORDER_ITEM_STATUS } from "../constants";

export const addOrderItems=(orderListItems)=>{
    return{
        type:ADD_ORDER_ITEMS,
        payload:orderListItems
    }
}

export const clearOrderItems=()=>{
    return{
        type:CLEAR_ORDER_ITEMS
    }
}
