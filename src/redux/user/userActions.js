import { connect } from "react-redux"
import { USER_AUTH, USER_AUTH_FAILED, USER_AUTH_SUCCESS, USER_LOGOUT } from "../constants"

export const userAuthSuccess=(user)=>{
    return {type:USER_AUTH_SUCCESS,payload:user}
}

export const userAuthStart=()=>{
    return {type:USER_AUTH}
}

export const userAuthFailed=(error)=>{
    return {type:USER_AUTH_FAILED,payload:error}
}

export const userAuthLogout=()=>{
    return {type:USER_LOGOUT}
}

export const userAuth=(number,password)=>{
    let data=new FormData();
    data.append('number',number)
    data.append('password',password)
    return (dispatch)=>{
        dispatch(userAuthStart())
        fetch('http://chandra.getenjoyment.net/reactSmartRes/login.php',{
            method:'POST',
            body:data
        })
        .then(response=>response.json()).then(
            res=>{
                console.log(res)
                if(res.login){
                    dispatch(userAuthSuccess(res))
                }else{
                    dispatch(userAuthFailed(res.message))
                }
            }
            )
        // )
        .catch(error=>{
            dispatch(userAuthFailed(error))
        })
    }
}