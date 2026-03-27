import { createSlice } from '@reduxjs/toolkit'
const productSlice = createSlice({
    name: 'product',
    initialState: { items: [] },
    reducers: {
        addToCart: {
            reducer(state, action) {
                const item = action.payload
                const exists = state.items.find((p => p.id === item.id))
                if (exists) {
                    exists.quantity += 1
                }
                else {
                    state.items.push(item)
                }
            },
            prepare({ id, name, price, image }) {
                return {
                    payload: {
                        id, name,
                        price, image,
                        quantity: 1
                    }
                }
            }
        },
        deleteFromCart:(state,action)=>{
            console.log(action.payload)
          state.items=state.items.filter(item=>item.id!==action.payload)
        }
    }
})
export const { addToCart,deleteFromCart } = productSlice.actions
export default productSlice.reducer