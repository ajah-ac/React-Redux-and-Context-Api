import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counter'
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Counter