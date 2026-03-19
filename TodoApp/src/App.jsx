import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './output.css'
import AddTodo from './components/AddTodo'
import Display from './Display'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <Display/>
    </>
  )
}

export default App
