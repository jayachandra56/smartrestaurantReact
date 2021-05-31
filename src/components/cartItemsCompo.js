import React from 'react'
import { connect,useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { clearCart, removeItemFromCart } from '../redux/cart/cartActions'
import CardForCartItem from './CardForCartItem'
import CardForListItem from './CardForListItem'

let itemID = ''
function CartItemsCompo(props) {
    const userNumber = useSelector(state => state.user.userNumber)
    //console.log(props.cartItems[0].id)
    // const itemsList=props.cartItems
    const RemoveItem = (id) => {
        itemID = id
        props.DeleteItem()
    }

    const GoMainMenu=()=>{
        props.history.push('/dashboard')
    }

    const PlaceOrder=()=>{
        
        let data=new FormData();
        data.append('data',JSON.stringify(props.cartItems));
        data.append('username',userNumber)
        fetch('http://chandra.getenjoyment.net/reactSmartRes/placeOrder.php',{
            method:'POST',
            body:data
        })
        .then(response=>response.json())
        .then(res=>{
            console.log(res)
            if(res.status){
                console.log("placed")
                props.clearCart()
            }else{
                console.log('failed')
            }
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div class="container list-item-container"><br/>
            <button className="btn btn-dark" onClick={GoMainMenu}>Main Menu</button><br/><br/>
                <div class="cart-item card-head">
                    <span class="name">Item Name</span>
                    <span class="price">Item Price</span>
                    <span class="qty">Qty</span>
                    <span class="action-btn"></span>
                </div>
            </div>
            {props.cartItems.length > 0 ?
                props.cartItems.map(item => <CardForCartItem key={item.id} listItemDetails={item} delItem={RemoveItem} />)

                : "Cart Is Empty"}
            <div>
            <br/><br/><button className="btn btn-dark" onClick={PlaceOrder}>Place Order</button><br/><br/>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DeleteItem: () => dispatch(removeItemFromCart(itemID)),
        clearCart:()=>dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartItemsCompo))

