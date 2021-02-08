import React, { useEffect, useState } from 'react';

import './App.css';

import Header from './components/Header.js'
import FilterBar from './components/FilterBar.js'
import ColorChange from './components/ColorChange.js'
import PostBoxContainer from './components/PostBoxContainer'


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
  const [ background, setBackground ] = useState('orange')

  function changeBackground(newBackground) {
    setBackground(newBackground);
  }

   return (
    <div className="App" style={{backgroundColor: background}}>
      <Header />
      <aside className="sidebar-left">
        <section className="rules">
          <header>
            <h3>SubReddit Rules</h3>
          </header>
          <ol>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
            <li>Rule 4</li>
            <li>Rule 5</li>
            <li>Rule 6</li>
            <li>Rule 7</li>
            <li>Rule 8</li>
            <li>Rule 9</li>
            <li>Rule 10</li>
            <li>Rule 11</li>
          </ol>
        </section>
      </aside>
      <ColorChange background={background} onClick={changeBackground}/>
      <FilterBar />
      <PostBoxContainer data={data} error={error} isLoading={isLoading}/>
    </div>

  );
}

export default App;
