import { createSlice } from "@reduxjs/toolkit";


interface userState {
    user : null,
    isAuthentic : boolean
}

const initialState:userState = {
    user : null,
    isAuthentic : false
}

const userSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload;
            state.isAuthentic = true
        },
        clearUser : (state, action) => {
            state.user = null,
            state.isAuthentic = false
        }
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer;