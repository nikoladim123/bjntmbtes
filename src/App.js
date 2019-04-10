import React, { Component } from 'react';



import {Main} from './components/Main'
import {Brate} from './components/tmbComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">



     <Main/>
     <Brate />
      </div>
    );
  }
}

export default App;
