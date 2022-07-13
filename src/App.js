import { useState, useEffect } from 'react';
import Header from './components/Header';
import Silhouette from './components/Silhouette';
import Search from './components/Search';
import Guess from './components/Guess';
import Modal from './components/Modal';
import Table from './components/Table'
import TeamTable from './components/TeamTable';

const playerJSON = require('./nba-data/namedata.json')['data'];
const playerJSONFull = require('./nba-data/playerdata-full.json')['data']

const getPlayerID = (playerName) => {
  let playerID = '';
  playerJSON.forEach(player => {
    if (player.full_name === playerName) {
      playerID = player.id;
    }
  })
  return playerID;
}

const generatePlayer = () => {
  const randomPlayer = playerJSON[Math.floor(Math.random() * playerJSON.length)]
  let playerFullData = {};

  playerJSONFull.forEach(player => {
    if (player.full_name === randomPlayer.full_name) {
      playerFullData = {...player, id: randomPlayer.id};
    }
  })

  return playerFullData;
}


const App = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [currentPlayer, setCurrentPlayer] = useState(() => generatePlayer());
  const [guessedPlayers, setGuessedPlayers] = useState([])

  const [attemptCount, setAttemptCount] = useState(1);
  const [gameStatus, setGameStatus] = useState('ONGOING');

  const [teamRevealed, setTeamRevealed] = useState(false);
  const [silhouetteRevealed, setSilhouetteRevealed] = useState(false);
  const [winStreak, setWinStreak] = useState(0);

  console.log(currentPlayer.full_name)

  useEffect(() => {
    setInputValue([]);
    playerJSONFull.forEach(player => {
      if (inputValue === player.full_name) {
        setGuessedPlayers(
          [...guessedPlayers, {...player, id: 2}]
        )
      }
    })
  }, [attemptCount])

  const stateObject = {
    filteredData: filteredData,
    setFilteredData: setFilteredData,
    inputValue: inputValue,
    setInputValue: setInputValue,
    currentPlayer: currentPlayer,
    setCurrentPlayer: setCurrentPlayer,
    guessedPlayers: guessedPlayers,
    setGuessedPlayers: setGuessedPlayers,
    attemptCount: attemptCount,
    setAttemptCount: setAttemptCount,
    gameStatus: gameStatus,
    setGameStatus: setGameStatus,
    silhouetteRevealed: silhouetteRevealed,
    setSilhouetteRevealed: setSilhouetteRevealed,
    winStreak: winStreak,
    setWinStreak: setWinStreak
  }

  const resetState = () => {
    setFilteredData([]);
    setInputValue('');
    setCurrentPlayer(() => generatePlayer());
    setAttemptCount(1);
    setGameStatus('ONGOING');
    setSilhouetteRevealed(false);
    setGuessedPlayers([])
  }

  return (
    <div className="App">
      <Header
        stateObject={stateObject}
      />

      <Silhouette 
        playerID={currentPlayer.id}
        stateObject={stateObject}
      />

      <Search  
        data={playerJSON} 
        stateObject={stateObject}
      />

      <Guess 
        data={playerJSON} 
        stateObject={stateObject}
      />

      <Table 
        getPlayerID={getPlayerID}
        stateObject={stateObject}
      />

      {gameStatus === 'WIN' ? (<Modal modalMessage={'You Win!'} currentPlayer={currentPlayer} resetState={resetState}/>) 
      : (gameStatus === 'LOSE' && (<Modal modalMessage={'Game Over!'} currentPlayer={currentPlayer} resetState={resetState}/>))}


      <div className="void"></div>

      <div className='team-container'>
        <div>
          <div>
              <p onClick={() => {setTeamRevealed(!teamRevealed);}}> {!teamRevealed ? 'Show Teams' : 'Hide Teams'} </p>
          </div>
        </div>
          <div className={teamRevealed ? 'show-team-table' : 'hide-team-table'}>
            <TeamTable/>
          </div>
      </div>

      <section className='about-footer'>
        <div className='author'>
          <a href='https://twitter.com/snowgoose'>by <span className='twitter-link'>SnowGoose</span></a>
          <p>Inspired by Poeltl and Larry Birdle</p>
        </div>
      </section>
    </div>
  );
}

export default App;
