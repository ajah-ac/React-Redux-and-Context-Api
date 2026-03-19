import {useSelector} from 'react-redux'
import React from 'react'

import Todo from './Todo'
const Display = () => {
    const todos=useSelector(state=>state.todos.items)
  return (

<>
<ul >
   {
    todos.length>0 &&
    todos.map(todo=><li
      key={todo.id}
      className='flex justify-between pr-6 pl-20'  
      ><Todo todo={todo}/></li>)}

    </ul></>
)
}

export default Display