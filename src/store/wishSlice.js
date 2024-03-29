import { createSlice } from '@reduxjs/toolkit';

const fetchFromLocalStorage = () => {
    const liked = localStorage.getItem('liked');
    return liked ? JSON.parse(liked) : [];
};

const storeInLocalStorage = (liked) => {
    localStorage.setItem('liked', JSON.stringify(liked));
};

const initialState = {
    likeList: fetchFromLocalStorage(),
    likeCount: 0,
    totalAmount: 0,
};

const wishSlice = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        addToLike: (state, action) => {
            const { id, quantity, price } = action.payload;
            const existedProductIndex = state.likeList.findIndex(item => item.id === id);

            if (existedProductIndex !== -1) {
                state.likeList[existedProductIndex].quantity += quantity;
            } else {
                state.likeList.push(action.payload);
            }

            state.likeCount = state.likeList.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.likeList.reduce((total, item) => total + (item.quantity * item.price), 0);

            storeInLocalStorage(state.likeList);
        },
        removeFromLike: (state, action) => {
            const index = state.likeList.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                const removedItem = state.likeList[index];
                state.likeCount -= removedItem.quantity;
                state.totalAmount -= removedItem.price * removedItem.quantity;

                state.likeList.splice(index, 1);

                storeInLocalStorage(state.likeList);
            }
        },
  
        getLikeTotal: (state) => {
            state.totalAmount = state.likeList.reduce((likeTotal, likeItem) => {
                return likeTotal += likeItem.price * likeItem.quantity;
            }, 0);
            state.likeCount = state.likeList.reduce((likeCount, likeItem) => {
                return likeCount += likeItem.quantity;
            }, 0);
        },
        
    }
})

export const { addToLike, removeFromLike,  getLikeTotal } = wishSlice.actions;
export default wishSlice.reducer;

