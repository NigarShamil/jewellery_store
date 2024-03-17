// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// const initialState = {
//     categories: []
// }

// export const getCategories = createAsyncThunk('category', async () => {
//     const response = await fetch('../assets/data/categories.json');
//     const data = await response.json();
//     return data
// })

// const categorySlice = createSlice({
//     name: 'categories',
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getCategories.fulfilled, (state, action) => {
//                 state.categories = action.payload
//             })
//     }
// })

// export default categorySlice.reducer


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    const response = await fetch('../assets/data/categories.json');
    const data = await response.json();
    return data;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default categorySlice.reducer;
