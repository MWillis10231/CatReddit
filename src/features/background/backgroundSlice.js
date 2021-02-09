import { createSlice } from '@reduxjs/toolkit';

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    value: 'white',
  },
  reducers: {
    updateBackground: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateBackground } = backgroundSlice.actions;

export const selectBackground = state => state.counter.value;

export default backgroundSlice.reducer;
