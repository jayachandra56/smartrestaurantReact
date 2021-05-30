import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromCart } from '../redux/cart/cartActions'
import CardForCartItem from './CardForCartItem'
import CardForListItem from './CardForListItem'

let itemID = ''
function cartItemsCompo(props) {
    //console.log(props.cartItems[0].id)
    // const itemsList=props.cartItems
    const RemoveItem = (id) => {
        itemID = id
        props.DeleteItem()
    }
    return (
        <div>
            <div class="container list-item-container">
                <div class="cart-item card-head">
                    <span class="name">Item Name</span>
                    <span class="price">Item Price</span>
                    <span class="qty">Qty</span>
                    <span class="action-btn"></span>
                </div>
            </div>
            {props.cartItems.length > 0 ?
                props.cartItems.map(item => <CardForCartItem key={item.id} listItemDetails={item} delItem={RemoveItem} />)

                : "No Items Added"}
            {/* <ul>
            {props.cartItems.map(item=><li key={item.id}>{item.itemName}&nbsp;&nbsp;{item.itemQty}
                &nbsp;&nbsp;
                <button className="btn" onClick={()=>RemoveItem(item.id)}>RemoveItem</button>
                </li>)}
            </ul> */}
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log("propsss")
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DeleteItem: () => dispatch(removeItemFromCart(itemID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartItemsCompo)

