import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const urlFilters = {
    default: 'https://www.reddit.com/r/cats.json', 
    hot: 'https://www.reddit.com/r/cats/hot/',
    new: 'https://www.reddit.com/r/cats/new.json',
    top: 'https://www.reddit.com/r/cats/top.json',
    topextras: { 
        now: 'https://www.reddit.com/r/cats/top/?t=hour.json',
        today: 'https://www.reddit.com/r/cats/top/?t=day',
        thisweek: 'https://www.reddit.com/r/cats/top/?t=week',
        thismonth: 'https://www.reddit.com/r/cats/top/?t=month',
        thisyear: 'https://www.reddit.com/r/cats/top/?t=year',
        alltime: 'https://www.reddit.com/r/cats/top/?t=all',
        },
    rising: 'https://www.reddit.com/r/cats/rising.json'
}

export const fetchCatData = createAsyncThunk('fetchdata', async () => 
    await fetch(urlFilters.default)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())
)

const initialState = {
    status: 'idle',
    page: 'home',
    url: urlFilters.default,
    data: {},
  }
  
const sourceSlice = createSlice({
    name: 'source',
    initialState,
    reducers: {
        urlChanged(state, action) {
            const page = action.payload
            state.url = urlFilters[page]
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCatData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCatData.fulfilled, (state, action) => {
                const newData = action.payload;
                state.data = newData;
                state.status = 'idle'
            })
    }
})

export const { urlChanged } = sourceSlice.actions

export const selectUrl = state => state.source.url;

export default sourceSlice.reducer 