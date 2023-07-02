import logo from './logo.svg';
import Game from './components/Game';
import Stats from './components/Stats';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Clicker RPG</h1>
      <div className='game-wrapper'>
        <div className='stat-wrapper'>
          <Stats />
        </div>
        <div className='clicker-wrapper'>
          <Game />
        </div>
      </div>
    </div>
  );
}

export default App;
