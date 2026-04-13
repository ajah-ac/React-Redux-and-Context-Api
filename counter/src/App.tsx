import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import type { RootState } from './main'
import { increment,decrement } from './counterSlice'
function App() {
  const state=useSelector((state:RootState)=>state.counter)
const dispatch=useDispatch()
  return (
    <>
     
<button onClick={()=>dispatch(increment())}>+</button>
<h1>{state.value}</h1>
<button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
