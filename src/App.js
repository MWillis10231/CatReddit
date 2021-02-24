import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackground } from './Redux/background/backgroundSlice'
import { urlChanged, fetchCatData, selectPosts, selectUrl } from './Redux/postsource/sourceSlice'
import './App.css';

import Header from './components/Header.js'
import FilterBar from './components/FilterBar.js'
import SideBar from './components/SideBar.js'
import PostBoxContainer from './components/PostBoxContainer.js'

function App() {
  const dispatch = useDispatch();
  const url = useSelector(selectUrl);
  const data = useSelector(selectPosts);

  const status = useSelector(state => state.source.status)
  const error = useSelector(state => state.source.error)

  const background = useSelector(selectBackground)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCatData())
    }
  }, [status, dispatch])

  let content

  if (status === 'loading') {
    content = <div>Loading...</div>
  } else if (status === 'succeeded') {
    content = <PostBoxContainer data={data} error={error} status={status}/>
  } else if (status === 'failed') {
    content = <div>{error}</div>
  }
   return (
    <div className="App" style={{backgroundColor: background}}>
      <Header />
      <FilterBar />
      <SideBar background={background} />
      {content}
    </div>

  );
}

export default App;
