import React from 'react'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import {useSelector} from 'react-redux'
    

function Header(props) {
    // const cartCount=
    const itemsCount = useSelector(state => state.cart.cartItems)
    const GoToCart=()=>{
        props.history.push('/cart')
    }

    const GoToDashboard=()=>{
        props.history.push('/dashboard')
    }

    const GoToMyOrders=()=>{
        props.history.push('/orders')
    }
    return (
        <div className="header container-fluid text-center bg-dark py-3 text-white">
            <div className="header-container">
                <div className="title">
                <h4 onClick={GoToDashboard}>SMART RESTAURANT</h4>
                </div>
                <div class="header-options">
                    <div className=" btn bg-primary text-white mx-4" onClick={GoToCart}><span className="bg-primary mx-1">Cart - </span><span className="count">{itemsCount.length}</span></div>
                    <button className="btn btn-primary mx-4" onClick={GoToMyOrders}>My Orders</button>
                    <button className="btn btn-primary mx-4">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)
