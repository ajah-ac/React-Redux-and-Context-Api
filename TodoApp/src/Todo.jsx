import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { deleteTodo } from './features/todosSlice'

const Todo = ({todo}) => {
    const dispatch=useDispatch()
  return (
<>

<input type='checkbox' checked={check}/>
<p style={{}}>{todo.text}</p>
 <button onClick={()=>{dispatch(deleteTodo(todo.id))}}>
    <Trash/>
    </button>
</>
)
}

export default Todo