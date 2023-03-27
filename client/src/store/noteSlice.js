import { createSlice } from '@reduxjs/toolkit';
import { addNewNote } from '../apis/noteApi';

const initialState = {
  data: []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { payload } = action;

      console.log( 'Data in note slice : ', payload);
      // state.data.push( payload );

      // send data to api
      addNewNote( payload );
    },
    getAllNotes: (state) => {
      const { data } = state;

      console.log( data );
    },
  },
})

export const { addNote, getAllNotes } = noteSlice.actions;

export default noteSlice.reducer;