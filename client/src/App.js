import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import Form from './Form';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

componentDidMount(){
  axios.get(`http://localhost:5000/api/players`)
  .then(response => {
    // console.log(response.data);
    this.setState({players: response.data})
    console.log(this.state.players)
  })
}

  render(){
    return(
      <div>
        <header>
          <h1>Soccer Players</h1>
        </header>

        <section>
          <PlayerCard player = {this.state.players} /> 
        </section>
      </div>
    )
  }
}
export default App;
