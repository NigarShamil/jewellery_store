import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const response = await fetch("../../assets/data/products.json");
    const data = await response.json();
    return data;
});

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productStatus = STATUS.FAIL;
            });
    }
});

export default productSlice.reducer;
