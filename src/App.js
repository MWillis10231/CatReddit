import React from 'react';
import cat from './cat-placeholder.jpg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Header from './components/Header.js'
import FilterBar from './components/FilterBar.js'
import ColorChange from './components/ColorChange.js'

function App() {
  return (
    <div className="App">
      <Header />
      <ColorChange />
      <FilterBar />
        <main>
          <div className="post-box">
            <figure>
              <img className="post-image" src={cat} alt="a cat" />
            </figure>
            <div className="post-content">
              <p>Posted by u/RedditUser</p>
              <p><time>12 hours ago</time></p>
              <h2>Post title</h2>
              <p>Up vote</p>
              <p>1222</p>
              <p>Down vote</p>
            </div>
          </div>
          <div className="post-box">
            <figure>
              <img src={cat} alt="a cat" />
            </figure>
            <p>Posted by u/RedditUser</p>
            <p><time>12 hours ago</time></p>
            <h2>Post title</h2>
            <p>Up vote</p>
            <p>1222</p>
            <p>Down vote</p>
          </div>
        </main>
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
          <section className="image-reel">
            <figure className="cat-image">
              <p>Upvote</p>
              <p>Downvote</p>
              <img />
            </figure>
          </section>
        </aside>
    </div>
  );
}

export default App;
