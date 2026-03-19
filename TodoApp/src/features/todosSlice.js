
import {createSlice} from  '@reduxjs/toolkit'
const initialStateVal={items:[]}
const todoSlice=createSlice({
    name:'todo',
    initialState:{value:initialStateVal}
    ,
    reducers:{
        addTodo:(state,action)=>{
        state.value.items.push(action.payload)
        }
    }

})
export const {addTodo}=todoSlice.actions
export default todoSlice.reducer