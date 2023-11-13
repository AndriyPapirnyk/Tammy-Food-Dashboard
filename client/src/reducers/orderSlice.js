import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: null,
  isOpened: false,
  amount: null,
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.order = action.payload;
    },
    openItem: (state, action) => {
      state.isOpened = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    }
  },
});

export const { setItem, openItem, setAmount } = orderSlice.actions;
export default orderSlice.reducer;
