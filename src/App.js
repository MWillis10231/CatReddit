import React from 'react';
import { useSelector } from 'react-redux';
import { selectBackground } from './Redux/background/backgroundSlice'
import './App.css';

import Header from './components/Header.js'
import FilterBar from './components/FilterBar.js'
import SideBar from './components/SideBar.js'
import PostBoxContainer from './components/PostBoxContainer.js'

// import fetchCatData from './fetchCatData'
import { useAsync } from 'react-async'

//should be some way to get this to change with a state hook
let url = 'https://www.reddit.com/r/cats.json';

const fetchCatData = async () => 
    await fetch(url)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())


function App() {
  const { data, error, isLoading } = useAsync({ promiseFn: fetchCatData })
  const background = useSelector(selectBackground)

   return (
    <div className="App" style={{backgroundColor: background}}>
      <Header />
      <FilterBar />
      <SideBar background={background} />
      <PostBoxContainer data={data} error={error} isLoading={isLoading}/>
    </div>

  );
}

export default App;
