
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
const todoSlice = createSlice({
    name: 'todo',
    initialState: { items: [] }
    ,
    reducers: {
        addTodo:{ 
            reducer(state, action){
            state.items.push(action.payload)
            
        },
    prepare(text){
        return{
            payload:{
                id:nanoid()
                , 
                text:text
            }
        }
    }
    },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload)
        }
   
    
    }

})
export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer