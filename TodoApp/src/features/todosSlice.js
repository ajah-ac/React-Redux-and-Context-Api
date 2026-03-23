
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
const todoSlice = createSlice({
    name: 'todo',
    initialState: { items: [] }
    ,
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.items.push(action.payload)

            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid() ,
                        complete: false,
                        text: text
                    }
                }
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload)
        }
        , toggleCheck: (state,action) => {
            const todo=state.items.find(t=>t.id===action.payload)
        if(todo){
            todo.complete=!todo.complete
        }
        }

    }

})
export const { addTodo, deleteTodo, toggleCheck } = todoSlice.actions
export default todoSlice.reducer
