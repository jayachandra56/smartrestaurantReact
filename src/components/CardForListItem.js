import { Snackbar, SnackbarContent } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/cart/cartActions'

function CardForListItem(props) {
    const [qty, setqty] = useState(1)
    const [opensnack, setopensnack] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const HandleAddTOCart = (item) => {

        const checkItem = cartItems.filter(itemDummy => itemDummy.id == item.id)

        if (checkItem.length == 0) {
            console.log("item not present")
            dispatch(addItemToCart(item))
        }
        else {
            console.log("item present")
            setopensnack(true)
        }

    }

    const handleCloseSnack=()=>{
        setopensnack(false)
    }

    return (
        <>
            <div class="container cart-item-container">
                <div class="cart-item">
                    <span class="name">{props.listItemDetails.name}</span>
                    <span class="price">{props.listItemDetails.price}</span>
                    <span class="qty"><input className="input-qty" type="number" onChange={e => setqty(e.target.value)} /></span>
                    <span class="action-btn"><button className="btn btn-warning" onClick={e => HandleAddTOCart({ id: props.listItemDetails.id, name: props.listItemDetails.name, price: props.listItemDetails.price, quantity: qty })}>Add Item</button></span>
                </div>
            </div>
            <Snackbar
                
                open={opensnack}
                onClose={handleCloseSnack}
                key={'bottom'+'center'}
                >
                    <SnackbarContent style={{
                        backgroundColor:'red',  
                        }}
                        message={<span id="client-snackbar">Item already present</span>}
                    />
                </Snackbar>
        </>
    )
}

export default CardForListItem
