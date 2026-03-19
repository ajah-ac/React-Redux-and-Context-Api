import React,{useState} from 'react'
import { changeColor } from './features/theme'
import {useDispatch} from 'react-redux'
const ChangeColor = () => {
    const [color,setColor]=useState('')
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" name="" id="" 
        onChange={(e)=>setColor(e.target.value)} />
    <button onClick={()=>dispatch(changeColor(color))}>Change Color</button></div>
  )
}

export default ChangeColor
