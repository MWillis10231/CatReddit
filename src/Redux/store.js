import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from './background/backgroundSlice'
import sourceReducer from './postsource/sourceSlice'

// If you've been to the site before and your background preferences were saved, this should load them up for you
/* let preloadedState
const persistedBackgroundColor = localStorage.getItem('background')

if (persistedBackgroundColor) {
  preloadedState = {
    todos: JSON.parse(persistedBackgroundColor)
  }
}
 */
// Otherwise create the store as normal
const store = configureStore({
  reducer: {
    background: backgroundReducer,
    source: sourceReducer
    }
})

export default store;
