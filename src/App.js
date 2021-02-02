import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header.js'
import FilterBar from './components/FilterBar.js'
import ColorChange from './components/ColorChange.js'
import PostBoxContainer from './components/PostBoxContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <ColorChange />
      <FilterBar />
      <PostBoxContainer />
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
    </div>
  );
}

export default App;
