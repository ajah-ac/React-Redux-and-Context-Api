import {useSelector} from 'react-redux'
import React from 'react'

const Display = () => {
    const todos=useSelector(state=>state.todos.value)

  return (
    <div>Todo:{todos}</div>
  )
}

export default Display