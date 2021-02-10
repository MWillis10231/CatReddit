import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: 'white',
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


/* export default function backgroundReducer(state = initialState, action) {
  switch (action.type) {
      case 'background/backgroundColorChanged': {
          return {
              ...state,
              background: action.payload
          }
      }

      default:
          return state;
  }
} */