import React from 'react'
import { login } from './user'
import { useDispatch } from 'react-redux'
const Login = () => {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{
            dispatch(login({name:'Pedro',age:20,email:'hao@gmail.com'}))
        }}>Login</button>
    </div>
  )
}

export default Login