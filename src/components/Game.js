import React, { useState, useEffect } from 'react';
import '../styles/game.css';
import boss from '../sprites/boss.png';

const boss_max_health = 1000000;

function Game({autoclickerLevel, gold, setGold, dps, goldGain, clickDamage}) {
  const [monsterHealth, setMonsterHealth] = useState(boss_max_health);

  const handleClick = () => {
    if (monsterHealth > 0) {
        setMonsterHealth(monsterHealth - clickDamage);
        setGold(gold + goldGain);
    }
  };

  useEffect(() => {
    // Autoclicker damage every second based on level
    const autoclickerInterval = setInterval(() => {
      if (monsterHealth > 0) {
        setMonsterHealth((prevHealth) => prevHealth - (dps / 10)); //change 0 to dps
      }
    }, 100);

    return () => {
      clearInterval(autoclickerInterval);
    };
  }, [monsterHealth, autoclickerLevel, dps]);

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
            <div className="health-text">{Math.floor(monsterHealth)}/{boss_max_health}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
