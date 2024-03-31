
import { createSlice } from "@reduxjs/toolkit";

const fakeRegisteredEmails = [
    "nigarshamilova77@gmail.com",
    "shamilovanigar00@gmail.com",
    "newaccountant05@gmail.com",
    "mynew_account01@gmail.com"
];

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogIn: false,
        email: fakeRegisteredEmails
    },
    reducers: {
        login(state) {
            state.isLogIn = true;
        },
        logout(state){
            state.isLogIn = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;
