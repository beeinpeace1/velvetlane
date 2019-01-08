import React, { Component } from 'react'
import './Navbar.css';
import logo_white from './../../assets/images/logo_white.png'
import logo_dark from './../../assets/images/logo_dark.png'

class Navbar extends Component {

  componentDidMount() {
    window.addEventListener('scroll', function() {
        if (document.scrollingElement.scrollTop > 10) {
            document.querySelector(".customer-navbar #logo").src = logo_dark;
            document.querySelector(".customer-navbar").classList.add("scrolled");
        } else {
            document.querySelector(".customer-navbar #logo").src = logo_white;
            document.querySelector(".customer-navbar").classList.remove("scrolled");
        }
    });
  }
  
  render() {
    return (
      <div>
        <header>
          <nav class="customer-navbar">
              <div className="items-holder">
                <span>Menu</span>
                <div id="brand-holder">
                  <img src={logo_white} id="logo" alt="VelvetLane" style={{ display: "none;"}} class="img-fluid"/>
                  <span>VelvetLane</span>
                </div>
                <button>get a free sample</button>
              </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Navbar;