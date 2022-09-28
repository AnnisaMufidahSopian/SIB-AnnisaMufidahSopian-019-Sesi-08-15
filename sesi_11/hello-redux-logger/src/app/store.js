import {configureStore} from '@reduxjs/toolkit'
import usersReducer from '../feature/users/usersSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})