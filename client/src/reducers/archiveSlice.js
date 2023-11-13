import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPopup: false,
};

const archiveSlice = createSlice({
  name: 'archiveSlice',
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

export const { showPopup, hidePopup } = archiveSlice.actions;
export default archiveSlice.reducer;
