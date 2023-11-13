import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../reducers/userSlice';
import addMemberSlice from '../reducers/addMemberSlice';
import amountSlice from '../reducers/amountSlice';
import viewSlice from '../reducers/viewSlice';
import orderSlice from '../reducers/orderSlice';
import archiveSlice from '../reducers/archiveSlice';
const store = configureStore({
  reducer: {
    user: userSlice,
    memberSlice: addMemberSlice,
    amountSlice: amountSlice,
    viewSlice: viewSlice,
    orderSlice: orderSlice,
    archiveSlice: archiveSlice,
  },
});

export default store;