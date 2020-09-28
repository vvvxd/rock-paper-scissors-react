import React from 'react';

import Score from "./components/Score/Score";
import Items from "./components/Items/Items";
import Rules from "./components/Rules/Rules";

function App() {

  return (
    <div className="game">
      <Score/>
      <Items/>
      <Rules/>
    </div>
  );
}

export default App;
