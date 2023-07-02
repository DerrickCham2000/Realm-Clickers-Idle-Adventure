import React, { useState } from 'react';
import '../styles/game.css';
import boss from '../sprites/boss.png';

const boss_max_health = 1000;

function Game() {
  const [monsterHealth, setMonsterHealth] = useState(boss_max_health);

  const handleClick = () => {
    if (monsterHealth > 0) {
        setMonsterHealth(monsterHealth - 10);
    }
  };

  return (
    <div className="game">
      <h2>Click the Monster!</h2>
      <img onClick={handleClick} className="mushroom_boss" src={boss} />
      <div className="monster">
        <div className="health-bar">
          <div
            className="health-bar-inner"
            style={{ width: `${monsterHealth * 100/boss_max_health}%` }}
          >
            <div className="health-text">{monsterHealth}/{boss_max_health}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
