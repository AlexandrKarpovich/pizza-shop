import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/filterSlices.js"

export const store = configureStore({
    reducer: {
        filter,
    },
})

// console.log(store, 'Redux')