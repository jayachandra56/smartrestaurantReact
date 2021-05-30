import React from 'react'

function CardForCartItem(props) {
    return (
        <div class="container cart-item-container">
            <div class="cart-item">
                <span class="name">{props.listItemDetails.itemName}</span>
                <span class="price">{props.listItemDetails.itemPrice}</span>
                <span class="qty">{props.listItemDetails.itemQty}</span>
                <span class="action-btn"><button className="btn btn-warning" onClick={()=>props.delItem(props.listItemDetails.id)}>RemoveItem</button></span>
            </div>
        </div>
    )
}

export default CardForCartItem
