import { useContext,useState,createContext } from "react";
import React from 'react'

const LanguageContext=createContext(null)

const LanguageProvider = ({children}) => {
const [lan,setLan]=useState('en')
function toggleLan(){
    setLan(prev=>prev==='en'?'fr':'en')
}
  return ( <LanguageContext.Provider value={{lan,toggleLan}}>
    {children}
  </LanguageContext.Provider>)
}

export default LanguageProvider
 export const useLanContext=()=>{
    return useContext(LanguageContext)
}