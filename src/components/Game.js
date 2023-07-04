import React, { useState, useEffect } from 'react';
import '../styles/game.css';
import boss from '../sprites/boss.png';

const boss_max_health = 100000;

function Game({stats, setStats, gold, gps, dps, goldPerClick, clickDamage}) {

  const [monsterHealth, setMonsterHealth] = useState(boss_max_health);
  const [shownAlert, setShownAlert] = useState(false);

  const handleClick = () => {
    if (monsterHealth > 0) {
        setMonsterHealth(monsterHealth - clickDamage);
        setStats({
          ...stats,
          gold: gold + goldPerClick,
        })
    }
  };

  useEffect(() => {
    // Autoclicker damage every second based on level
    if (monsterHealth <= 0) {
      alert("You Won!");
    }
    const autoclickerInterval = setInterval(() => {
      if (monsterHealth > 0) {
        setMonsterHealth(monsterHealth - (dps / 10)); //change 0 to dps
        setStats({
          ...stats,
          gold: gold + (gps/10),
        })
      }
    }, 100);

    return () => {
      clearInterval(autoclickerInterval);
    };
  }, [monsterHealth, stats]);

  return (
    <div className="game">
      <h2>Click the Monster!</h2>
      <img onClick={handleClick} className="pulse_effect mushroom_boss" src={boss} />
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
