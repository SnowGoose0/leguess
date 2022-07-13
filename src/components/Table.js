import React from 'react'
const teamJSON = require('../nba-data/teamdata.json');
const teamJSONFULL = require('../nba-data/teamdata-full.json');

const colNames = ['Player', 'Team', 'Conference', 'Division', 'Position', 'Height', 'Age', 'Number'];

const Table = ({getPlayerID, stateObject}) => {

    const {guessedPlayers, currentPlayer} = stateObject;

    const currentPlayerHeight = currentPlayer.height.split("'");

    const tdClassColor = (current, guess) => {
        if (current === guess) {
            return 'td-green';
        } else if (Math.abs(parseInt(current) - parseInt(guess)) <= 2) {
            return 'td-yellow';
        }
        return 'td-default';
    }

    const tdClassContent = (current, guess) => {
        if (current === guess) {
            return guess;
        } else if (parseInt(current) - parseInt(guess) < 0) {
            return guess + '↓';
        } else {
            return guess + '↑';
        }
    }

    const tdClassContentHeight = (current, guess) => {

        const inch = guess%100;
        const foot = Math.floor(guess/100);

        const height = foot.toString() + "'" + inch.toString()

        if (current === guess) {
            return height;
        } else if (current - guess < 0) {
            return height + '↓';
        } else {
            return height + '↑';
        }
    }

    const getTeamOBJ = (teamName) => {
        let teamObject = {};
        let teamID = '';

        teamJSON.forEach(team => {
            if (team.full_name === teamName) {
                teamID = team.id.toString();

                teamJSONFULL.forEach(teamFull => {
                    if (teamFull.id === teamID) {
                        teamObject = teamFull;
                    }
                })
            }
        })
        return teamObject;
    }

    return (
        <div className="table-container">
        <table>
            <thead>
                <tr>
                    {colNames.map((heading, idx) => (<th key={idx}>{heading}</th>))}
                </tr>
            </thead>
            <tbody>
                {Object.values(guessedPlayers).map((playerObject, idx) => (
                    <tr key={idx}>
                        <td>
                            <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${getPlayerID(playerObject.full_name)}.png`} title={playerObject.full_name}></img>
                        </td>
                        
                        <td className={tdClassColor(currentPlayer.team_name, playerObject.team_name)}>{getTeamOBJ(playerObject.team_name).abbr}</td>
                        
                        <td className={tdClassColor(getTeamOBJ(currentPlayer.team_name).conference, getTeamOBJ(playerObject.team_name).conference)}>{getTeamOBJ(playerObject.team_name).conference}</td>
                        
                        <td className={tdClassColor(getTeamOBJ(currentPlayer.team_name).division, getTeamOBJ(playerObject.team_name).division)}>{getTeamOBJ(playerObject.team_name).division}</td>
                        
                        <td className={tdClassColor(currentPlayer.position, playerObject.position)}>{playerObject.position}</td>

                        <td className={playerObject.height === currentPlayer.height ? 'td-green' : tdClassColor(parseInt(currentPlayerHeight[0] * 100 + parseInt(currentPlayerHeight[1])), parseInt(playerObject.height.split("'")[0]) * 100 + parseInt(playerObject.height.split("'")[1]))}
                            >{playerObject.height === currentPlayer.height ? currentPlayer.height : tdClassContentHeight(parseInt(currentPlayerHeight[0] * 100 + parseInt(currentPlayerHeight[1])), parseInt(playerObject.height.split("'")[0]) * 100 + parseInt(playerObject.height.split("'")[1]))}</td>

                        <td className={tdClassColor(currentPlayer.age, playerObject.age)}>{tdClassContent(currentPlayer.age, playerObject.age)}</td>

                        <td className={tdClassColor(currentPlayer.jersey, playerObject.jersey)}>{tdClassContent(currentPlayer.jersey, playerObject.jersey)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default Table