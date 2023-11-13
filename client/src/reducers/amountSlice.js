import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: null,
};

const amountSlice = createSlice({
  name: 'amountSlice',
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setAmount } = amountSlice.actions;
export default amountSlice.reducer;
