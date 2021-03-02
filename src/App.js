import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBackground } from './Redux/background/backgroundSlice'
import { fetchCatData, selectPosts, selectUrl } from './Redux/postsource/sourceSlice'
import './App.css';

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
import Loading from './components/Loading'
import LoadFail from './components/LoadFail'

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
  let postContent

  if (status === 'loading') {
    content = (<Loading/>)
  } else if (status === 'succeeded') {
    content = (<PostBoxContainer data={data} error={error} status={status} comments='hide'/>)
    postContent = (<SinglePostContainer data={data} error={error} status={status} comments='display'/>)
  } else if (status === 'failed') {
    content = (<LoadFail/>)
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
        <Route exact path="/:postId" render={() => (
          <React.Fragment>{postContent}</React.Fragment>
        )}/>
        <Redirect to="/" />
      </Switch>
    </div>
  </Router> 
  );
}

export default App;
