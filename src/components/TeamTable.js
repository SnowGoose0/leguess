import React from 'react'

const TeamTable = () => {
  return (
    <div className='team-table-container'>
    <table>
    <thead>
        <tr>
            <th colspan="5">Western Conference</th>
            <th colspan="5">Eastern Conference</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="5">Northwest</td>
            <td colspan="5">Atlantic</td>
        </tr>
        <tr>
            <td>DEN</td>
            <td>MIN</td>
            <td>POR</td>
            <td>OKC</td>
            <td>UTA</td>
            <td>BOS</td>
            <td>BKN</td>
            <td>NYK</td>
            <td>PHI</td>
            <td>TOR</td>
        </tr>
        <tr>
            <td colspan="5">Pacific</td>
            <td colspan="5">Central</td>
        </tr>
        <tr>
            <td>GSW</td>
            <td>LAC</td>
            <td>LAL</td>
            <td>PHX</td>
            <td>SAC</td>
            <td>CLE</td>
            <td>CHI</td>
            <td>DET</td>
            <td>IND</td>
            <td>MIL</td>
        </tr>
        <tr>
            <td colspan="5">Southwest</td>
            <td colspan="5">Southeast</td>
        </tr>
        <tr>
            <td>DAL</td>
            <td>HOU</td>
            <td>MEM</td>
            <td>NO</td>
            <td>SAS</td>
            <td>ATL</td>
            <td>CHA</td>
            <td>MIA</td>
            <td>ORL</td>
            <td>WAS</td>
        </tr>
    </tbody>
    </table>
    </div>
  )
}

export default TeamTable