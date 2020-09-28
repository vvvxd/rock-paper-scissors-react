import React, {useState} from 'react';
import {Route, useHistory} from "react-router-dom";

import Score from "./components/Score/Score";
import Items from "./components/Items/Items";
import Rules from "./components/Rules/Rules";

import Game from "./components/Game/Game";

function App() {
    const [activeItem, setActiveItem] = useState(null);
    const [score,setScore] = useState(0);
    let history = useHistory();

return (
    <div className="game">
        <Score score={score}/>
        <Route exact path="/">
            <Items history={history} setActiveItem={setActiveItem}/>
        </Route>
        <Route path="/game" >
            <Game  score={score} setScore={setScore} history={history} activeItem={activeItem}/>
        </Route>
        <Rules/>
    </div>
);
}

export default App;
