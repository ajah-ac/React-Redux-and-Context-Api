import React from 'react'
import {useSelector} from 'react-redux'
function Profile() {
    const user=useSelector((state)=>state.user.value)
  return (
    <div >

   <h1>     Name:{user.name}</h1>
       <h4> Age:{user.age}
        </h4>
       <h4> Email:{user.email}</h4>
    </div>
  )
}

export default Profile