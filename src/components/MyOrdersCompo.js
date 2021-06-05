import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { ADD_ORDER_ITEMS, CLEAR_ORDER_ITEMS } from '../redux/constants'
import CardItemForMyOrders from './CardItemForMyOrders'

function MyOrdersCompo(props) {
    const dispatch = useDispatch()
    const [itemslist, setitemslist] = useState([])
    const userNumber = useSelector(state => state.user.userNumber)
    const userName = useSelector(state => state.user.userName)
    const orderCount = useSelector(state => state.orders.MyOrdersList)

    //console.log(orderCount)
    useEffect(()=>{
        let data=new FormData();
        data.append('username',userNumber);
        fetch('http://chandra.getenjoyment.net/reactSmartRes/getOrderList.php',{
                method:'POST',
                body:data
            })
            .then(response=>response.json().then(
                res=>{
                    if(res.status){
                        setitemslist(res.data)
                        dispatch({type:CLEAR_ORDER_ITEMS})
                        dispatch({type:ADD_ORDER_ITEMS,payload:res.data})
                    }
                   console.log(res)
                    
                }
                )
            )
            //.then(console.log(orderCount.length))
            .catch(error=>{
                console.log(error)
            })
    },[])

    const GoMainMenu=()=>{
        props.history.push('/dashboard');
    }


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		// const data = await fetch('https://api.razorpay.com/v1/orders', { method: 'POST' }).then((t) =>
		// 	t.json()
		// )

		// console.log(data)

		const options = {
			key: 'rzp_test_ZJtXiDtP6P4uQO',
			currency: 'INR',
			amount: '50000',
			order_id: 'order_HJQdVMzjlKHw0j',
			name: 'Bill Payment',
			description: 'Thank you for Visiting.',
			image: '../asserts/main_bg.jpg',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
                paymentSuccess()
			},
			prefill: {
				name:userName,
				email: 'smartrestaurant@gmail.com',
				phone_number:userNumber
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

    const paymentSuccess=()=>{
        let data=new FormData();
        data.append('username',userNumber);
        fetch('http://chandra.getenjoyment.net/reactSmartRes/paymentSuccess.php',{
                method:'POST',
                body:data
            })
            .then(response=>response.json().then(
                res=>{
                   // console.log(res.data)
                    setitemslist([])
                    console.log("PAYMENT SUCCESS......")
                    dispatch({type:CLEAR_ORDER_ITEMS})
                }
                )
            )
            //.then(console.log(orderCount.length))
            .catch(error=>{
                console.log(error)
            })
    }

    return (
        <div>
            <div>
            <div class="container list-item-container"><br/>
            <button className="btn btn-dark" onClick={GoMainMenu}>Main Menu</button><br/><br/>
                <div class="cart-item card-head">
                    <span class="name">Item Name</span>
                    <span class="price">Item Price</span>
                    <span class="qty">Qty</span>    
                    <span class="action-btn">Status</span>
                </div>
            </div>
            {itemslist.length>0?
            itemslist.map((itemd,index)=><CardItemForMyOrders key={index} listItemDetails={itemd}/>):
            'No Items Available'}
            <div>
            <br/><br/><button className="btn btn-dark" onClick={displayRazorpay}>Make Payment</button><br/><br/>
            </div>
        </div>
        </div>
    )
}

export default withRouter(MyOrdersCompo)
