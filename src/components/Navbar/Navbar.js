import React, { Component } from 'react'
import './Navbar.css';
import logo_white from './../../assets/images/logo_white.png'
import logo_dark from './../../assets/images/logo_dark.png'

class Navbar extends Component {

  componentDidMount() {
    document.querySelector("#menu-check").addEventListener('click', e => {
      if(e.target.checked){
        document.querySelector('.menu-overlay').classList.remove('d-none');
        setTimeout(() => {
          document.querySelector('.menu-overlay').classList.add('overlay-op');
        }, 1);
        document.querySelector('.fa-bars').style.transform = "rotate(90deg)";
        document.body.style.overflow = "hidden";
      } else {
        document.querySelector('.menu-overlay').classList.add('d-none');
        document.querySelector('.fa-bars').style.transform = "rotate(0deg)";
        document.body.style.overflow = "auto";
        setTimeout(() => {
          document.querySelector('.menu-overlay').classList.remove('overlay-op');
        }, 1);
      }
    })

  }
  
  render() {
    let turnable = window.location.pathname.indexOf('turnable') > -1 ? "bg-dark": "";
    return (
      <div>
        <header>
          <nav class={`customer-navbar ${turnable}`}>
              <div className="items-holder">
              <div class="menu-button">
                <input type="checkbox" id="menu-check"/>
                <label htmlFor="menu-check" className="ml-2"><i class="fas fa-bars"></i> Menu</label>
              </div>
                <div id="brand-holder">
                  <img src={logo_white} id="logo" alt="VelvetLane" style={{ display: "none;"}} class="img-fluid"/>
                  <span>VelvetLane</span>
                </div>
                <button>get a free sample</button>
              </div>
          </nav>
        </header>
        <div className="menu-overlay d-none">
          <div className="menu-links-holder">
            <ul>
              <li>Home</li>
              <li>still pictures</li>
              <li>turnable animations</li>
              <li>creative animations</li>
              <li>onbody pictures</li>
              <li>jewelry design</li>
              <li>master setup</li>
            </ul>
          </div>
          <div className="contact-us-overlay">
            <ul>
              <li>about</li>
              <li>contact</li>
              <li>career</li>
            </ul>
          </div>
           <div className="footer" style={{ position: "fixed", bottom: "0px", background: "#000", color: "#ddd"}}>
            <div className="wrapper_1600">
                <div className="rights"><p>Velvetlane | All rights reserved 2018</p></div>
                <div className="social translate-middle">
                    <ul>
                        <li>
													<a href="" target="_blank">
														<img src="http://2dm9jb42vj3t1pgffe40fox0.wpengine.netdna-cdn.com/wp-content/uploads/2018/05/youtube.svg"/>
													</a>
                        </li>
                        <li>
													<a href="" target="_blank">
														<img src="http://2dm9jb42vj3t1pgffe40fox0.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/social-instagram.svg"/>
													</a>
                        </li>
                        <li>
													<a href="" target="_blank">
														<img src="http://2dm9jb42vj3t1pgffe40fox0.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/social-facebook.svg"/>
													</a>
                        </li>
                        <li>
													<a href="" target="_blank">
														<img src="http://2dm9jb42vj3t1pgffe40fox0.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/social-linkedin.svg"/>
													</a>
                        </li>
                    </ul>
                </div>
                <div className="credit"><a target="_blank" href="#">Site by maya</a></div>
                <div className="clear"></div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Navbar;