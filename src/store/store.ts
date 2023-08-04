// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export default store;