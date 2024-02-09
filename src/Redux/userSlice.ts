import { createSlice } from "@reduxjs/toolkit";


interface User {
    userName: string;
    email: string;
    profile: string;
    fname: string;
    lname: string;
    adress: string;
    password: string;
}

export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            state.user = null;
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;