import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeProvider } from './ThemeContext'
import ToggleButton from './ToggleButton'
import ThemedBox from './ThemedBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider>
      <ToggleButton/>
      <ThemedBox/>
    </ThemeProvider>
    </>
  )
}

export default App

