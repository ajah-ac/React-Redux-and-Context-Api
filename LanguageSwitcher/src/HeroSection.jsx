import React from 'react'
import { useLanguage } from './LanguageContext'
const HeroSection = () => {
    const {lan,toggleLan}=useLanguage()
  return (
    <div><p>
        Welcome to the world</p></div>
  )
}

export default HeroSection