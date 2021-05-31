import React, { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CardItemForMyOrders from './CardItemForMyOrders'

function MyOrdersCompo(props) {
    const [itemslist, setitemslist] = useState([])
    const userNumber = useSelector(state => state.user.userNumber)

    useEffect(()=>{
        let data=new FormData();
        data.append('username',userNumber);
        fetch('http://chandra.getenjoyment.net/reactSmartRes/getOrderList.php',{
                method:'POST',
                body:data
            })
            .then(response=>response.json().then(
                res=>{
                    console.log(res)
                    setitemslist(res.data)
                }
                )
            )
            .catch(error=>{
                console.log(error)
            })
    },[])

    const GoMainMenu=()=>{
        props.history.push('/dashboard');
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
            {itemslist.map(itemd=><CardItemForMyOrders key={itemd.id} listItemDetails={itemd}/>)}
        </div>
        </div>
    )
}

export default withRouter(MyOrdersCompo)
