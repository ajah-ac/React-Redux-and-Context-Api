import React from 'react'
import { createContext,useContext,useState,useReducer } from 'react'
const todoContext=createContext(null)
function reducer(state,action){
    switch (action.type) {
        case 'add':
            return {items:[...state.items,action.payload]}
            case 'delete':
                return {items:state.items.filter(item=>item.id!==action.payload)} 
        default:
            return state.items;
    }
}

export function TodoProvider({children}){
const [state,dispatch]=useReducer(reducer,{items:[]})
    return (
    <todoContext.Provider value={{state,dispatch}}>
{children} 
    </todoContext.Provider>
 )
}


export const useTodoContext=()=>{
    return useContext(todoContext)
}