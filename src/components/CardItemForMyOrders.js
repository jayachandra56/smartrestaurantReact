import { Snackbar, SnackbarContent } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/cart/cartActions'

function CardItemForMyOrders(props) {
    return (
        <>
            <div class="container cart-item-container">
                <div class="cart-item">
                    <span class="name">{props.listItemDetails.name}</span>
                    <span class="price">{props.listItemDetails.price}</span>
                    <span class="qty">{props.listItemDetails.quantity}</span>
                    <span class="action-btn">{props.listItemDetails.status}</span>
                </div>
            </div>
        </>
    )
}

export default CardItemForMyOrders
