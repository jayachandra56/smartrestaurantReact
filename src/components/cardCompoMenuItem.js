import React from 'react'
import {withRouter} from 'react-router-dom'

function cardCompoMenuItem(props) {
    return (
        <div className="cardItem" onClick={()=>{props.history.push('/itemslist',{userId:props.itemDetails.id})}}>
            <div className="img-container">
            <img className="cardImg" src='https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe.jpg' alt="no image found"/>
            </div>
            
            <div className="cardTitle center">
                <p className="titleText text-dark"><b>{props.itemDetails.name}</b></p>
            </div>
        </div>
    )
}

export default withRouter(cardCompoMenuItem)
