import mysteryImage from './assets/silhouette.png'

const Silhouette = ({playerID, stateObject}) => {

    const {silhouetteRevealed, setSilhouetteRevealed} = stateObject;

    return (
        <div className='mystery-image'>
            <img className={!silhouetteRevealed ? 'stock-image-unrevealed' : 'stock-image-revealed'} src={mysteryImage}></img>
            <img className={silhouetteRevealed ? 'dark-image-unrevealed' : 'dark-image-revealed'} src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerID}.png`}></img>

            <div className='reveal-text-container'>
                <div className='reveal-text'>
                    <p className='click-reveal' onClick={() => {setSilhouetteRevealed(!silhouetteRevealed);}}> {!silhouetteRevealed ? 'Show Silhouette' : 'Hide Silhouette'} </p>
                </div>
            </div>
        </div>
    )
}

export default Silhouette