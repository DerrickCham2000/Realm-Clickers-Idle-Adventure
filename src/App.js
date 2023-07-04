import React, { useState } from 'react';
import Game from './components/Game';
import Upgrades from './components/Upgrades';
import './styles/App.css';

function App() {
  const [stats, setStats] = useState({
    dps: 0,
    gold: 0,
    gps: 0,
    goldPerClick: 1,
    clickDamage: 1,
  });

  return (
    <div className="App">
      <div className='header'>
        Realm Clickers: Idle Adventures
      </div>
      <div className='game-wrapper'>
        <div className='stat-wrapper'>
          <Upgrades
            stats={stats}
            setStats={setStats}
            gold = {stats.gold}
          />
        </div>
        <div className='clicker-wrapper'>
          <Game
            stats={stats}
            gold={stats.gold}
            dps={stats.dps}
            goldPerClick={stats.goldPerClick}
            gps={stats.gps}
            clickDamage={stats.clickDamage}
            setStats={setStats}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
