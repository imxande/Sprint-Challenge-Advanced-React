import React from 'react';
import './App.css';
import axios from 'axios';

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
        <h1>Get Ready player ONE</h1>
      </div>
    )
  }
}
export default App;
