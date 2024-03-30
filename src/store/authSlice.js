
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogIn: false,
        email: [
            "nigarshamilova77@gmail.com",
            "shamilovanigar00@gmail.com",
            "newaccountant05@gmail.com",
            "mynew_account01@gmail.com"
        ]
    },
    reducers: {
        login(state) {
            state.isLogIn = true;
        },
        logout(state){
            state.isLogIn = false;
            state.email = null; 
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;
