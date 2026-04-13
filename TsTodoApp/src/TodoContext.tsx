import React, { createContext, useReducer,useContext } from 'react'

type Items={
id:number;
text:string;
complete:boolean
}
type state={
items:Items[]
}
 type  action=
      | {type:'add',payload:Items }
      | {type:'delete',payload:number}
    
const todocontext = createContext<{state:state,dispatch:React.Dispatch<action>}| null>(null)


function reducer(state:state, action:action):state{
    switch (action.type) {
        case 'add':
            return { items: [...state.items, action.payload] }
        case 'delete':
            return {items:state.items.filter(item=>item.id!==action.payload)}
default:
    return state
    }
}
const TodoProvider = ({children}:{children:React.ReactNode}) => {
    const [state,dispatch]=useReducer(reducer,{items:[]})
    return (
        <todocontext.Provider value={{state,dispatch}}>{children}</todocontext.Provider>
    )
}

export default TodoProvider
const useTodoContext=()=>{
    const context=useContext(todocontext)
    if(!context){
        throw new Error ('useTodoContext must be used inside TodoProvider')

    }
    return context
}