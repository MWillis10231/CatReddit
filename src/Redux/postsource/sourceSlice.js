import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const baseUrl = 'https://www.reddit.com/r/cats'
export const redditURL = 'https://www.reddit.com'

export const urlFilters = {
    default: '', 
    hot: '/hot',
    new: '/new',
    top: '/top',
    topnow: '/top/?t=hour',
    topday: '/top/?t=day',
    topthisweek: '/top/?t=week',
    topthismonth: '/top/?t=month',
    topthisyear: '/top/?t=year',
    topalltime: '/top/?t=all',
    rising: '/rising',
}

export const fetchCatData = createAsyncThunk('fetchdata', async (url) => 
    await fetch(url)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
)

const initialState = {
    status: 'idle',
    url: baseUrl + urlFilters.default + '.json',
    error: null,
    data: [],
  }
  
const sourceSlice = createSlice({
    name: 'source',
    initialState,
    reducers: {
        filterChanged(state, action) {
            const page = action.payload
            state.url = baseUrl + urlFilters[page] + '.json'
            state.status = 'idle'
        },
        urlChanged(state, action) {
            const page = action.payload
            state.url = redditURL + page + '.json'
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
        },
    }
})

export const { filterChanged } = sourceSlice.actions
export const { urlChanged } = sourceSlice.actions

export const selectUrl = state => state.source.url;
export const selectPosts = state => state.source.data;

export default sourceSlice.reducer 