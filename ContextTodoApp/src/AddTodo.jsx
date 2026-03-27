import { Plus } from 'lucide-react'
import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { useTodoContext } from './TodoContext'
const AddTodo = () => {
    const [input,setInput]=useState('')
    const {state,dispatch}=useTodoContext()
  return (
    <div className='shadow-md max-w-2xl mt-40 p-4 rounded-3xl w-3/4 m-auto flex justify-between'>
        <input type="text" 
        className='w-3/4 border-0 outline-0'
         placeholder='Add a task'
         onChange={e=>setInput(e.target.value)}
         />
        <button className='' onClick={()=>{dispatch({type:'add',payload:{id:nanoid(), text:input,complete:false}})}} > <Plus/></button>
    </div>
  )
}

export default AddTodo