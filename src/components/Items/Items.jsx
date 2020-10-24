import React from 'react';

import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';

import './Items.scss';
import { Link } from 'react-router-dom';

const Items = ({ setActiveItem, setRandom }) => {
  return (
    <div className="game__items">
      <Link
        to="/game"
        onClick={() => {
          setActiveItem('paper');
          setRandom();
        }}
        className="game__items-paper">
        <img src={paper} alt="" />
      </Link>
      <Link
        to="/game"
        onClick={() => {
          setActiveItem('rock');
          setRandom();
        }}
        className="game__items-rock">
        <img src={rock} alt="" />
      </Link>
      <Link
        to="/game"
        onClick={() => {
          setActiveItem('scissors');
          setRandom();
        }}
        className="game__items-scissors">
        <img src={scissors} alt="" />
      </Link>
    </div>
  );
};

export default Items;
