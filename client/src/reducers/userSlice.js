import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: null,
    verified: false,
  },
  reducers: {
    setUserStatus: (state, action) => {
      state.status = action.payload;
    },
    setUserVerify: (state, action) => {
      state.verified = action.payload;
    },
  },
});

export const { setUserStatus, setUserVerify } = userSlice.actions;

export default userSlice.reducer;