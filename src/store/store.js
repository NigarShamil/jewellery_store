import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import cartSlice from "./cartSlice"


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        carts: cartSlice
        
    }
})