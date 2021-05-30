import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/cart/cartActions';
import CardForListItem from './CardForListItem';

let itemObj={id:'cv',name:'',price:'',quantity:''};
function ItemsListCompo(props) {
    const [itemsList, setitemslist] = useState([])
    const [qty, setqty] = useState(1)
    
    console.log("cart items==="+props.cartItems)
    useEffect(()=>{
        let data=new FormData();
        data.append('category',props.category);
        fetch('http://chandra.getenjoyment.net/reactSmartRes/getItemsList.php',{
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

    const HandleAddTOCart=(item)=>{
        itemObj.id=item.id;
        itemObj.name=item.name;
        itemObj.price=item.price;
        itemObj.quantity=item.quantity;
        //console.log(JSON.stringify(itemObj))
        props.AddTOCart()

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
            {itemsList.map(itemd=><CardForListItem key={itemd.id} listItemDetails={itemd}/>)}
            {/* <ul>
            {itemsList.map(itemd=><li key={itemd.id}>{itemd.name}{itemd.price}
            <input type="number" onChange={e=>setqty(e.target.value)}/>
            <button onClick={e=>HandleAddTOCart({id:itemd.id,name:itemd.name,price:itemd.price,quantity:qty})}>Add Item</button>
            </li>)}
            </ul> */}
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
        AddTOCart:()=>dispatch(addItemToCart(itemObj))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsListCompo)
