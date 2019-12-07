import React from 'react';

function SearchBar(){
    return(
        <div>
            <form>
                <label htmlFor = 'pname'>Search by name: </label>
                <input
                maxLength = '15' 
                id = 'pname'
                name = 'name'
                type = 'text'
                placeholder = " Enter player's name..."
                >
                </input>
            </form>
        </div>
    )
}


export default SearchBar;