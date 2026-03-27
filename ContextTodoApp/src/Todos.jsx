import React from 'react'
import Todo from './Todo'
import { useTodoContext } from './TodoContext'
const Todos = () => {
    const {state,dispatch}=useTodoContext()
  return (
<ul>{state.items.map(t=><li key={t.id}>
    <Todo id={t.id} 
    text={t.text}
     dispatch={dispatch}
     complete={t.complete} />
    </li>)} </ul>  )
}

export default Todos