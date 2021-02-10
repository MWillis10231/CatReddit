import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: 'https://www.reddit.com/r/cats.json',
  }
  
const sourceSlice = createSlice({
    name: 'source',
    initialState,
    reducers: {
        urlChanged(state, action) {
            switch (action.type) {
                case 'change': {
                    return {
                        ...state,
                        url: action.payload
                    }
                }
                default:
                    return state;
            }
        }
    }
})

export const { urlChanged } = sourceSlice.actions

export const selectUrl = state => state.source.url;

export default sourceSlice.reducer 