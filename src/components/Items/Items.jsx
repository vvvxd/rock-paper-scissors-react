import React from 'react';

import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'

import './Items.scss'

const Items = () => {
    return (
        <div className='game__items'>
            <div className="game__items-paper ">
                <img src={paper} alt=""/>
            </div>
            <div className="game__items-rock">
                <img src={rock} alt=""/>
            </div>
            <div className="game__items-scissors ">
                <img src={scissors} alt=""/>
            </div>
        </div>
    )
    ;
};

export default Items;
