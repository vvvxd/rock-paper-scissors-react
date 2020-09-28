import React, {useEffect,useState} from 'react';

import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'

import './Game.scss'


const Game = ({activeItem, history,setScore,score}) => {
    const arr = ['paper', 'rock', 'scissors'];
    let randomItem = arr[Math.floor(Math.random() * arr.length)];

    const printRes = (item) => {
        switch (item) {
            case 'paper': {
                return (
                    <div className={`game__play-paper`}>
                        <img src={paper} alt={paper}/>
                    </div>
                );
            }
            case 'rock': {
                return (
                    <div className={`game__play-rock`}>
                        <img src={rock} alt={rock}/>
                    </div>
                );
            }
            case 'scissors': {
                return (
                    <div className={`game__play-scissors`}>
                        <img src={scissors} alt={scissors}/>
                    </div>
                );
            }

        }

    }

    const battleResult = (choice1, choice2) => {
        let res = '';
        if (choice1 === choice2) {
            res= "The result is a tie!";
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                res= "You win";
            } else {
                res= "Paper wins";
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                res= "You wins";
            } else {
                res= "Scissors wins";
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "paper") {
                res= "You win";
            } else {
                res= "Rock wins";
            }
        }
        return res;
    }

    return (
        <>
            { activeItem
                ? (<div className='game__play'>
                    {
                        printRes(activeItem)
                    }
                    <div className="game__play-battleResult">
                        {battleResult(activeItem, randomItem)}
                        <button onClick={() => {history.push('/')}}>
                            Play again
                        </button>
                    </div>
                    {
                        printRes(randomItem)
                    }
                </div>)
                : history.push('/')
            }
        </>
    );
};

export default Game;
