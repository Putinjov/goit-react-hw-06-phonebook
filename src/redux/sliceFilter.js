import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    query: (state, action) => {
      return action.payload;
    },
  },
});

export const { query } = sliceFilter.actions;

export default sliceFilter.reducer;

