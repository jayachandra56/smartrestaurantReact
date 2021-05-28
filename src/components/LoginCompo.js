import React,{useState} from 'react'
import '../css/LoginCompo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { userAuth } from '../redux/user/userActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

let num=''
let pass=''
function LoginCompo(props) {
    const [number, setnumber] = useState('')
    const [password, setpassword] = useState('')
    num=number
    pass=password

    const NavigateToDashboard=()=>{
        const {history}=props
        if(history) {
            history.push('/dashboard')
        }else{
            console.log("no history")
        }
    }

    if(props.isLogged){
        NavigateToDashboard()
    }
    return (
        <div className="container-fluid login-main">
            <div className="sub-container">
                <div className="login-container ">
                    <h1 className="text-center">Login</h1>
                    <form>
                        <div className="form-group text-left">
                            <label >Number</label>
                            <input type="text" value={number} onChange={e=>setnumber(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter number" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your number with anyone else.</small>
                        </div>
                        <div className="form-group text-left">
                            <label >Password</label>
                            <input type="password" value={password} onChange={e=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <span className="text-center text-danger"><small>{props.error}</small></span>
                        </div>
                        
                        <button type='button' onClick={props.userAuthStart} className="btn btn-primary text-center">{props.isLoading?'Fetching..':'Submit'}</button>
                    </form>
                    <br/><br/>
                    <span className="text-center">Not Registered yet?&nbsp;&nbsp;<small className="hoverText text-primary">Register Now</small></span>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        userName:state.user.userName,
        userNumber:state.user.userNumber,
        isLogged:state.user.isLogged,
        isLoading:state.user.isLoading,
        error:state.user.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    userAuthStart:()=>dispatch(userAuth(num,pass))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginCompo))
