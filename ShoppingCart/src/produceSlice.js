import {createSlice} from '@reduxjs/toolkit'
const productSlice=createSlice({
    name:'product',
    initialState:{items:[]},
    reducers:{
        addToCart:(state,action)=>{
state.items.push(action.payload)
        }
    }
})
export const {addToCart}=productSlice.actions
export default productSlice.reducer