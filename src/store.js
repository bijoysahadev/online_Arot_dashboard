import { configureStore } from '@reduxjs/toolkit';
import UserInfoSlice from './Slices/UserInfoSlice';

export const store = configureStore({
  reducer: {
    userInfo: UserInfoSlice,
  },
});