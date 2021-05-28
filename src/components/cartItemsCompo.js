import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromCart } from '../redux/cart/cartActions'

let itemID=''
function cartItemsCompo(props) {
    //console.log(props.cartItems[0].id)
    // const itemsList=props.cartItems
    const RemoveItem=(id)=>{
        itemID=id
        props.DeleteItem()
    }
    return (
        <div>
             <ul>
            {props.cartItems.map(item=><li key={item.id}>{item.itemName}&nbsp;&nbsp;{item.itemQty}
                &nbsp;&nbsp;
                <button className="btn" onClick={()=>RemoveItem(item.id)}>RemoveItem</button>
                </li>)}
            </ul>
        </div>
    )
}


const mapStateToProps=(state)=>{
    console.log("propsss")
    return{
        cartItems:state.cart.cartItems
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        DeleteItem:()=>dispatch(removeItemFromCart(itemID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cartItemsCompo)

