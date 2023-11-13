import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  view: 'orders',
};

const viewSlice = createSlice({
  name: 'viewSlice',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
