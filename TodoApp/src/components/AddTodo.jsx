import { Plus } from 'lucide-react'
import React from 'react'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../features/todosSlice'
const AddTodo = () => {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
  return (
    <div className='shadow-md max-w-2xl mt-40 p-4 rounded-3xl w-3/4 m-auto flex justify-between'>
        <input type="text" 
        className='w-3/4 border-0 outline-0'
         placeholder='Add a task'
         onChange={e=>setInput(e.target.value)}
         />
        <button className='' onClick={()=>{dispatch(addTodo(input))}}> <Plus/></button>
    </div>
  )
}

export default AddTodo