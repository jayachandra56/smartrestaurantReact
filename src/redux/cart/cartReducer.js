import { ADD_ITEM, REMOVE_ITEM } from "../constants"

const initialState={
    cartItems:[]
}

export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM:{
            console.log(state.cartItems)
            return{
                cartItems:[...state.cartItems,{
                    id:action.payload.id,
                    itemName:action.payload.name,
                    itemPrice:action.payload.price,
                    itemQty:action.payload.quantity
                }]
            }
        }
        case REMOVE_ITEM:{
            return{
                cartItems:state.cartItems.filter(item=> item.id!==action.payload)
            }
        }
        default: return state;
    }
}