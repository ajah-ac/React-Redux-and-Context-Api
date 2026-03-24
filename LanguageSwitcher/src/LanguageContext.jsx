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
    <h1></h1>
  </LanguageContext.Provider>)
}

export default LanguageProvider
 export const useLanguage=()=>{
    return useContext(LanguageContext)
}