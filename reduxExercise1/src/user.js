import { createSlice } from "@reduxjs/toolkit";
//allows creating reducer in a way to split logic
const userSlice = createSlice({
    name: 'user',
    initialState: { value: { name: '', age: 0, email: '' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
})
export default userSlice