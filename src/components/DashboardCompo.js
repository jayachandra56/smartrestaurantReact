import React,{useEffect,useState} from 'react'
import {withRouter} from 'react-router-dom'
import CardCompoMenuItem from './cardCompoMenuItem';

let menu=[];


function DashboardCompo(props) {
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
        <div class="container-fluid">
            <div className="container-fluid items-container">
            {items.map(item=>
            <CardCompoMenuItem key={item.id} itemDetails={item}/>)}
            </div>
            {/* <ul>
            {items.map(item=><li key={item.id} onClick={()=>{props.history.push('/itemslist',{userId:item.id})}}>{item.name}</li>)}
            </ul> */}
        </div>
    )
}

export default withRouter(DashboardCompo)
