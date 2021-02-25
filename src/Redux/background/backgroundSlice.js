import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: '#c8bae3',
}

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    backgroundChanged(state, action) {
      const background = action.payload
      state.backgroundColor = background
    }
  }
})

export const { backgroundChanged } = backgroundSlice.actions

export const selectBackground = state => state.background.backgroundColor;

export default backgroundSlice.reducer