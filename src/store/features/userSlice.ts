// src/features/counterSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    username: string,
    role: string,
}

const initialState: UserState = {
    username: "游客_" + Date.now(),
    role: "tourist",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.username = initialState.username
            state.role = initialState.role
        }
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;