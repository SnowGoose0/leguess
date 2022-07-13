import ClearIcon from '@material-ui/icons/Clear';

const Search = ({data, stateObject}) => {

    const {attemptCount, filteredData, setFilteredData, inputValue, setInputValue} = stateObject;

    const handleSearch = (e) => {
        const searchInput = e.target.value
        const newFilter = data.filter((value) => {
            return value.full_name.toLowerCase().includes(searchInput.toLowerCase().trim());
        });
        
        if (searchInput === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div className="search" >
            <div className='search-input'>
                <input type='text' value={inputValue} placeholder={`Attempt ${attemptCount}/8`} onChange={(event) => {
                    handleSearch(event);
                    handleInput(event);
                }}/>
                <button className='clear-button' type='submit' onClick={() => {setFilteredData([]); setInputValue('');}} >
                    <ClearIcon className='clear-icon'/>
                </button>
            </div>

            <div className='search-container'>
                {filteredData != 0 && (
                <div className={filteredData.length == 1 ? 'suggestions-short' : (filteredData.length == 2 ? 'suggestions-medium' : 'suggestions-full')}>
                    {filteredData.slice(0,15).map((value, idx) => {
                        return <a onClick={() => {
                            setInputValue(value.full_name);
                            setFilteredData([]);
                        }} key={idx} className='suggestions-item'>
                            <p className='player-name'>{value.full_name}</p>
                        </a>
                    })}
                </div>
                )}
            </div>
        </div>
  )
}

export default Search