import { useState } from 'react'
import AddTodo from './AddTodo'
import './output.css'
import { TodoProvider } from './TodoContext'
import Todos from './Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<TodoProvider>
        <AddTodo/>
        <Todos/>
</TodoProvider>
    </>
  )
}

export default App
