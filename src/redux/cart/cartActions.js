import { ADD_ITEM, CLEAR_CART, MODIFY_ITEM, REMOVE_ITEM } from "../constants";


export const addItemToCart=(item)=>{
    console.log(item)
    return {
        type:ADD_ITEM,
        payload:item
    }
}

export const removeItemFromCart=(id)=>{
    return {
        type:REMOVE_ITEM,
        payload:id
    }
}

export const modifyItemInCart=(item)=>{
    return {
        type:MODIFY_ITEM,
        payload:item
    }
}
export const clearCart=()=>{
    return {
        type:CLEAR_CART
    }
}