import React from 'react'
import Header from '../components/Header';
import ItemsListCOmpo from '../components/ItemsListCOmpo';



function ItemsList(props) {
    return (
        <>
        <Header/>
        <ItemsListCOmpo category={props.history.location.state.userId}/>
        </>
        
    )
}

export default ItemsList
