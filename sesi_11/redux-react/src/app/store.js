import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})