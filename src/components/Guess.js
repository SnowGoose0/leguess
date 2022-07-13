import React from 'react'
import { Button } from '@material-ui/core'

const Guess = ({ data, stateObject }) => {

    const {filteredData, inputValue, currentPlayer, attemptCount, setAttemptCount, setGameStatus, winStreak, setWinStreak} = stateObject;

    const onGuess = (inputName) => {
        const nameCheck = (player) => inputName === player.full_name;
        const playerExists = data.some(nameCheck);

        if (playerExists) {
            if (inputValue === currentPlayer.full_name) {
                setGameStatus('WIN');
                setWinStreak(winStreak+1);

            } else {
                setAttemptCount(attemptCount + 1)
                if (attemptCount === 8) {
                    setGameStatus('LOSE');
                    setWinStreak(0);
                }
            }
        }

    }

    return (
        <div className={`guess-button${filteredData.length === 0 ? '': '-hidden'}`}>
            <Button onClick={() => {
                onGuess(inputValue)
            }} variant='contained' color='primary'>Guess</Button>
        </div>
    )
}

export default Guess