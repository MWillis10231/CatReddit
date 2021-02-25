import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackground } from './Redux/background/backgroundSlice'
import { fetchCatData, selectPosts, selectUrl } from './Redux/postsource/sourceSlice'
import './App.css';
import cat from './logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from './components/Header.js'
import FilterBar from './components/FilterBar.js'
import SideBar from './components/SideBar.js'
import PostBoxContainer from './components/PostBoxContainer.js'
import SinglePostContainer from './components/SinglePostContainer'

function App() {
  const dispatch = useDispatch();
  const url = useSelector(selectUrl);
  const data = useSelector(selectPosts);

  const status = useSelector(state => state.source.status)
  const error = useSelector(state => state.source.error)

  const background = useSelector(selectBackground)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCatData(url))
    }
  }, [status, dispatch, url])

  let content

  if (status === 'loading') {
    content = (
      <div className="post-box-loading">
        <div className="loader">
          <p className="load-text">Loading...</p>
          <img className="load-image" alt="a cat" src={cat} />
        </div>
      </div>
      )
  } else if (status === 'succeeded') {
    content = 
      <PostBoxContainer data={data} error={error} status={status}/>
  } else if (status === 'failed') {
    content = (
      <div className="post-box-loading">
        <div className="loader">
          <p className="load-text">{error}</p>
          <img className="load-image" alt="a cat" src={cat} />
          <button type="button" onClick={() => dispatch(fetchCatData(url))}>Try again</button>
        </div>
      </div>
    )
  }
   return (
    <Router>
      <div className="App" style={{backgroundColor: background}}>
      <Header />
      <FilterBar />
      <SideBar background={background} />
      <Switch>
        <Route exact path="/" render={() => (
          <React.Fragment>{content}</React.Fragment>
        )}/>
        <Route exact path="/:postId" component={SinglePostContainer}/>
        <Redirect to="/" />
      </Switch>
    </div>
  </Router> 
  );
}

export default App;
