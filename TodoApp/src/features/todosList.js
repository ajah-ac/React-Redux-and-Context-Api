
import {createSlice} from  '@reduxjs/toolkit'
const initialStateVal=[]
const todosList=createSlice({
    name:'todo',
    initialState:{value:initialStateVal}
    ,
    reducers:{
        addTodo:(state,action)=>{
        state.value.push(action.payload)
        }
    }

})
export const {addTodo}=todosList.actions
export default todosList.reducer