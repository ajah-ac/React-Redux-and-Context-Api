import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login'
import Profile from './Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hELLO</h1>
     <Profile/>
     <Login/>
    </>
  )
}

export default App
