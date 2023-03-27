import { configureStore } from '@reduxjs/toolkit'
import noteSlice from './noteSlice';
import pageSlice from './pageSlice';

export const store = configureStore({
  reducer: {
    note: noteSlice,
    page: pageSlice,
  },
})