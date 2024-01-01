import { configureStore } from '@reduxjs/toolkit'
import { bikesReducer } from './bikesSlice'


const store = configureStore({
    reducer: {
        bikesReducer
    }
})

export default store