import React from 'react';

import './Score.scss'
import logo from '../../images/logo.svg'


const Score = () => {
    return (
        <div className="game__score">
            <img src={logo} alt="qwe"/>
            <div className="game__score-num">
                <span>
                    score
                </span>
                <strong>
                    10
                </strong>
            </div>
        </div>
    );
};

export default Score;
