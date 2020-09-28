import React from 'react';

import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'

import './Items.scss'

const Items = ({setActiveItem,history}) => {
    return (
        <div className='game__items'>
            <div
                onClick={()=>{
                    history.push('/game');
                    setActiveItem('paper');
                }}
                className="game__items-paper"
            >
                <img src={paper} alt=""/>
            </div>
            <div
                onClick={()=>{
                    history.push('/game');
                    setActiveItem('rock');
                }}
                className="game__items-rock"
            >
                <img src={rock} alt=""/>
            </div>
            <div
                onClick={()=>{
                    history.push('/game');
                    setActiveItem('scissors');
                }}
                className="game__items-scissors"
            >
                <img src={scissors} alt=""/>
            </div>
        </div>
    )
    ;
};

export default Items;
