import React from 'react'

function PageNotFound(props) {

    const NavigateToHome=()=>{
        props.history.push('/')
    }
    return (
        <div>
            <h1>404 error<br/>Page Not Found!</h1>
            <span>Go To:<p className='hoverText' onClick={NavigateToHome}>Home Page</p></span>
        </div>
    )
}

export default PageNotFound
