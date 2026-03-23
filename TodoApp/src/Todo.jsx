import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { deleteTodo ,toggleCheck} from './features/todosSlice'
const Todo = ({todo}) => {
    const dispatch=useDispatch()
  return (
<>

<input type='checkbox' checked={todo.complete} onChange={()=>{dispatch(toggleCheck(todo.id))}}/>
<p style={{textDecoration:todo.complete?'line-through':'none' }}>{todo.text}</p>
 <button onClick={()=>{dispatch(deleteTodo(todo.id))}}>
    <Trash/>
    </button>
</>
)
}

export default Todo