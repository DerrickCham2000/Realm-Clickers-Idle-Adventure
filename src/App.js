import React, { useState } from 'react';
import Game from './components/Game';
import Stats from './components/Stats';
import './styles/App.css';

function App() {
  const [gold, setGold] = useState(0);
  const [goldGain, setGoldGain] = useState(1);
  const [clickDamage, setClickDamage] = useState(1);
  const [autoclickerLevel, setAutoclickerLevel] = useState(0);
  const [dps, setDPS] = useState(0);

  return (
    <div className="App">
      <h1>Clicker RPG</h1>
      <div className='game-wrapper'>
        <div className='stat-wrapper'>
          <Stats
            autoclickerLevel={autoclickerLevel}
            setAutoclickerLevel={setAutoclickerLevel}
            setGold={setGold}
            gold={gold}
            setDPS={setDPS}
            dps={dps}
          />
        </div>
        <div className='clicker-wrapper'>
          <Game
            gold={gold}
            setGold={setGold}
            goldGain={goldGain}
            autoclickerLevel={autoclickerLevel}
            dps={dps}
            clickDamage={clickDamage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
