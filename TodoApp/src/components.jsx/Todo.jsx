import { Plus } from 'lucide-react'
import React from 'react'

const Todo = () => {
  return (
    <div className='bg-green-200 p-4 rounded-3xl w-3/4 m-auto flex justify-between'>
        <input type="text" className='w-3/4 border-0 outline-0' placeholder='hello world'/>
        <button className='bg-red-200'> <Plus/></button>
    </div>
  )
}

export default Todo