import React from 'react'

function DisplayPlayers(props){
    console.log(props)
    return(
        <div>
           {props.players.map(item =>(
               <div key = {item.id}>
                   <h1> {item.name} </h1>
                   <p>Country: {item.country} </p>
                   <p>Searches: {item.searches} </p>
               </div>
           ))}
        </div>
    )
}

export default DisplayPlayers;