import React from 'react'
import Todo from './Todo'
import { useTodoContext } from './TodoContext'
const Todos = () => {
    const {state,dispatch}=useTodoContext()
  return (
<ul className='flex flex-col m-auto max-w-400 justify-evenly'>{state.items.map(t=><li 
className='flex'
key={t.id}>
    <Todo id={t.id} 
    text={t.text}
     dispatch={dispatch}
     complete={t.complete} />
    </li>)} </ul>  )
}

export default Todos