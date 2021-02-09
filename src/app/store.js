import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import backgroundReducer from '../features/background/backgroundSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    background: backgroundReducer,
  },
});
