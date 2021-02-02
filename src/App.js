import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="The cat reddit logo" height="200px" />
        <h1>CatReddit</h1>
        <div className="filter">Hot / New / Top / Etc.</div>
        <div className="flair-filter">Filter by Flair</div>
      </header>
      <body>
        <main>
          <div className="post-box">
            <figure>
              <img />
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
      </body>
    </div>
  );
}

export default App;
