import React from 'react'

const Header = ({stateObject}) => {

  const {winStreak} = stateObject;

  return (
    <div className='header'>
        <div className='top-bar'></div>
        <h1>Guess the NBA Player</h1>
        <div className='win-streak'>
          <h3>Win Streak: {winStreak}</h3>
        </div>
    </div>
  )
}

export default Header