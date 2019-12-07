import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayPlayers from './DisplayPlayers';
import SearchBar from './SearchBar';

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
      this.setState({
        players: response.data
      });
      console.log(this.state.players);
    })
    .catch(err => console.log('nooo'));
  }
  render(){
    return(
      <div>
        <header>
          <SearchBar />
        </header>
        <DisplayPlayers players= {this.state.players} />
      </div>
    )
  }
}
export default App;
