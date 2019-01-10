import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import logo_white from './assets/images/logo_white.png'
import logo_dark from './assets/images/logo_dark.png'
import { Scrollbars } from 'react-custom-scrollbars';

import './App.css';

class App extends Component {

  handleScroll(e) {
    if (e.target.scrollTop > 10) {
      if(document.querySelector(".customer-navbar #logo")){
        document.querySelector(".customer-navbar #logo").src = logo_dark;
        document.querySelector(".customer-navbar").classList.add("scrolled");
      }
    } else {
      if(document.querySelector(".customer-navbar #logo")){
        document.querySelector(".customer-navbar #logo").src = logo_white;
        document.querySelector(".customer-navbar").classList.remove("scrolled");
      }
    }
  }

  render() {
    return (
      <Scrollbars style={{ height: "100vh" }} onScroll={this.handleScroll}>
      <div className="App">
        <Navbar />
        <Home />
       </div>
       </Scrollbars>
    );
  }
}

export default App;
