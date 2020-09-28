import React,{useState} from 'react';

import Score from "./components/Score/Score";
import Items from "./components/Items/Items";
import Rules from "./components/Rules/Rules";

function App() {
    const [activeItem,setActiveItem] = useState(null)
    console.log(activeItem);
  return (
    <div className="game">
      <Score/>
      <Items setActiveItem={setActiveItem}/>
      <Rules/>
    </div>
  );
}

export default App;
