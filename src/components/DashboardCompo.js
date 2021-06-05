import React,{useEffect,useState} from 'react'
import {withRouter} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import CardCompoMenuItem from './cardCompoMenuItem';

let menu=[];


function DashboardCompo(props) {
    const orderCount = useSelector(state => state.orders.MyOrdersList)
    const [items, setitems] = useState([])
    
    useEffect(()=>{
        fetch('http://chandra.getenjoyment.net/reactSmartRes/getMainMenu.php',{
                method:'GET'
            })
            .then(response=>response.json().then(
                res=>{
                    console.log(res)
                    setitems(res.data)
                }
                )
            )
            .catch(error=>{
                console.log(error)
            })
    },[])

    return (
        <div class="container-fluid px-0">
            <div className="container-fluid items-container">
            {items.map(item=>
            <CardCompoMenuItem key={item.id} itemDetails={item}/>)}
            </div>
        </div>
    )
}

export default withRouter(DashboardCompo)
