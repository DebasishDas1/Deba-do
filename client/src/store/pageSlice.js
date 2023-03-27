import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePageTitle: (state, action) => {
      state.name = action.payload;
    },
  },
})

export const { updatePageTitle } = pageSlice.actions

export default pageSlice.reducer