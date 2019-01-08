import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
       </div>
    );
  }
}

export default App;
