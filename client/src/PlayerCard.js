import React from 'react';

function PlayerCard(props){
    return(
        <div>
            {props.player.map(item => (
                <div className = 'playerCard' key = {item.id}>
                    <h2>Name: {item.name} </h2>
                    <p>Country: <strong>{item.country}</strong></p>
                    <p>Searches: {item.searches} </p> 
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;