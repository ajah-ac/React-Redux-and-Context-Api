import { Plus } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
const AddTodo = () => {
    const [input,setInput]=useState('')
  return (
    <div className='bg-green-200 p-4 rounded-3xl w-3/4 m-auto flex justify-between'>
        <input type="text" 
        className='w-3/4 border-0 outline-0'
         placeholder='hello world'
         onChange={e=>setInput(e.target.value)}
         />
        <button className='bg-red-200' onClick={()=>{}}> <Plus/></button>
    </div>
  )
}

export default AddTodo