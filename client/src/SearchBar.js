import React, {useState} from 'react';

function SearchBar(){
    const [pname, setPname] = useState('')
    return(
        
        <div>
            <h3>The name is {pname || 'unknown'}   </h3>

            <form 
                onSubmit = {e =>{
                    e.preventDefault();
                }}
            >
                <label htmlFor = 'pname'>Search by name: </label>
                <input
                maxLength = '50' 
                id = 'pname'
                name = 'name'
                type = 'text'
                placeholder = " Enter player's name..."
                onChange = {event => {
                    setPname(event.target.value)
                }}

                >
                </input>
            </form>
        </div>
    )
}


export default SearchBar;