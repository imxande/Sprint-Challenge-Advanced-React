import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
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
