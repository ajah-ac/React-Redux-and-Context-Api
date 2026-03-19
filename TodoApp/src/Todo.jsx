import { Trash } from 'lucide-react'
import React from 'react'

const Todo = ({todo}) => {
  return (
<>
<input type='checkbox'/>
<p>{todo}</p>
<Trash/>
</>
)
}

export default Todo