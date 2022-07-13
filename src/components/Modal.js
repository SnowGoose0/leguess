import React from 'react'
import { Button } from '@material-ui/core'

const Modal = ({modalMessage, currentPlayer, resetState}) => {
  return (
    <div className='modal'>
        <div className='overlay'></div>
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-header-content">
                    {modalMessage}
                </h1>
            </div>
            <div className="player-revealed">
                <img className='image-revealed' src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${currentPlayer.id}.png`}/>
            </div>
            <div className="modal-player-name">
                <a href={`https://www.nba.com/player/${currentPlayer.id}`}>{currentPlayer.full_name}</a>
            </div>
            <Button  onClick={() => {
                resetState();
            }} className='run-it-back' variant='contained' color='primary'>Run it Back</Button>
        </div>
    </div>
  )
}

export default Modal