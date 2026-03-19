import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './output.css'
import AddTodo from './components.jsx/AddTodo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
    </>
  )
}

export default App
