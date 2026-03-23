import { createContext,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
  const ThemeContext=createContext(null)
function App() {
  const [theme, setTheme] = useState('light')
function toggleTheme(){
setTheme(prev=>prev==='light'?'dark':'light')}
  return (
    <>
    
    
    </>
  )
}

export default App
