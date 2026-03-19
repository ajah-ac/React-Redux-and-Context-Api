import React from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from './features/user.js'
const Login = () => {
    const dispatch=useDispatch()
  return (
    <>
    <button onClick={()=>{
dispatch(login({name:'Pedro',age:20,email:'haei@gmail.com'}))
    }}>Login</button>
 <button onClick={()=>dispatch(logout())}>Logout</button>  
</>
)

}

export default Login