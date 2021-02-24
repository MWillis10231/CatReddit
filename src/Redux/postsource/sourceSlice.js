import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const urlFilters = {
    default: 'https://www.reddit.com/r/cats.json', 
    hot: 'https://www.reddit.com/r/cats/hot.json',
    new: 'https://www.reddit.com/r/cats/new.json',
    top: 'https://www.reddit.com/r/cats/top.json',
    topextras: { 
        now: 'https://www.reddit.com/r/cats/top/?t=hour.json',
        today: 'https://www.reddit.com/r/cats/top/?t=day.json',
        thisweek: 'https://www.reddit.com/r/cats/top/?t=week.json',
        thismonth: 'https://www.reddit.com/r/cats/top/?t=month.json',
        thisyear: 'https://www.reddit.com/r/cats/top/?t=year.json',
        alltime: 'https://www.reddit.com/r/cats/top/?t=all.json',
        },
    rising: 'https://www.reddit.com/r/cats/rising.json'
}

export const fetchCatData = createAsyncThunk('fetchdata', async (url) => 
    await fetch(url)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
)

const initialState = {
    status: 'idle',
    page: 'home',
    url: urlFilters.default,
    error: null,
    data: [],
  }
  
const sourceSlice = createSlice({
    name: 'source',
    initialState,
    reducers: {
        urlChanged(state, action) {
            const page = action.payload
            state.url = urlFilters[page]
            state.status = 'idle'
        }
    },
    extraReducers: {
        [fetchCatData.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchCatData.fulfilled]: (state, action) => {
            const newData = action.payload;
            state.data = newData;
            state.status = 'succeeded'
        },
        [fetchCatData.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const { urlChanged } = sourceSlice.actions

export const selectUrl = state => state.source.url;
export const selectPosts = state => state.source.data;

export default sourceSlice.reducer 