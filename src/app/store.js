import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from '../features/counter/counterSlice';

export const store = createStore(counterReducer, applyMiddleware(thunk));

// This function should grab the reddit data that we need!
function fetchRedditData() {
  return fetch('https://www.reddit.com/r/cats.json')
}

// Not sure yet how this should work
function loadRedditData() {
  return function(dispatch) {
    return fetchRedditData().then(

    )
  }
}