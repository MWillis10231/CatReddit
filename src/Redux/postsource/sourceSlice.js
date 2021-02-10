const initialState = {
    url: 'https://www.reddit.com/r/cats.json',
  }
  
  export default function sourceReducer(state = initialState, action) {
    switch (action.type) {
        case 'source/filterChanged': {
            return {
                ...state,
                url: action.payload
            }
        }
  
        default:
            return state;
    }
  }