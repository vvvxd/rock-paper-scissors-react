import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Score from './components/Score/Score';
import Items from './components/Items/Items';
import Rules from './components/Rules/Rules';

import Game from './components/Game/Game';

const arr = ['paper', 'rock', 'scissors'];

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [score, setScore] = useState(0);
  const [randomItem, setRandomItem] = useState(0);

  const setRandom = () => {
    const random = arr[Math.floor(Math.random() * arr.length)];
    setRandomItem(random);
  };

  return (
    <div className="game">
      <Score score={score} />
      <Route exact path="/">
        <Items setActiveItem={setActiveItem} setRandom={setRandom} />
      </Route>
      <Route path="/game">
        <Game randomItem={randomItem} score={score} setScore={setScore} activeItem={activeItem} />
      </Route>
      <Rules />
    </div>
  );
}

export default App;
