import { createContext,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [theme, setTheme] = useState('light')
  const ThemeContext=createContext(null)
function toggleTheme(theme){
return theme==='light'?'dark':'light'
}
  return (
    <>
    
    
    </>
  )
}

export default App
