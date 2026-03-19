
import {createSlice} from  '@reduxjs/toolkit'
const initialStateVal=''
const todoSlice=createSlice({
    name:'todo',
    initialState:{value:initialStateVal}
    ,
    reducers:{
        add:(state,action)=>{
        state.value=action.payload
        }
    }

})
export default todoSlice.reducer