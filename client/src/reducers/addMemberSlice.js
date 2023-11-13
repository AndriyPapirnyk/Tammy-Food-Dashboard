import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPopup: false,
};

const memberSlice = createSlice({
  name: 'memberSlice',
  initialState,
  reducers: {
    showPopup: (state) => {
      state.showPopup = true;
    },
    hidePopup: (state) => {
      state.showPopup = false;
    },
  },
});

export const { showPopup, hidePopup } = memberSlice.actions;
export default memberSlice.reducer;
