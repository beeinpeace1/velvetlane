import React, { Component } from "react";
import Footer from "./../Footer/Footer";
import { Link } from "react-router-dom";

import "./Home.css";

let thirdSection =
  "http://s1.picswalls.com/wallpapers/2014/08/16/jewelry_072527474_205.jpg";
let fourthSection =
  "http://s1.picswalls.com/wallpapers/2014/08/16/jewelry-desktop-backgrounds_072525458_205.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homepage-holder">
          <div className="first-section">
            <h1>FINE JEWELRY VISUALIZATIONS</h1>
            <p>We Know How To Present Your Jewelry</p>
          </div>
          <div className="second-section container">
            <p>
              Every jewelry purchase is embedded with emotion and your client
              expects a luxury shopping experience.
            </p>
            <p>
              We create the finest in jewelry visualizations with attention to
              detail, passion for perfection, creativity and a lot love for what
              we do.
            </p>
            <br />
            <p>
              Our aim is simple; to be the best at our craft. An aim that comes
              with much responsibility but one that we endeavour to deliver in
              every piece of art we create.
            </p>
          </div>
          <div
            className="third-section"
            style={{ backgroundImage: `url(${thirdSection})` }}
          >
            <div className="content-holder">
              <h3>STILL PICTURES</h3>
              <p>
                Simply the highest quality still imagery using professional
                light setups and world class visualizations.
              </p>
              <a href="#">EXPLORE</a>
            </div>
          </div>
          <div
            className="fourth-section"
            style={{ backgroundImage: `url(${fourthSection})` }}
          >
            <div className="content-holder">
              <h3>TURNTABLE ANIMATION</h3>
              <p>
                Precious metals and diamonds look better in motion. The natural,
                diamonds "fire", glow and reflections will highlight all the
                details of your pieces, turntable animation will "bring life" to
                your jewelry
              </p>
              <Link to="/turnable">EXPLORE</Link>
            </div>
          </div>
          <div
            className="fourth-section onbody"
            style={{
              backgroundImage: `url(http://s1.picswalls.com/wallpapers/2014/08/16/jewelry-high-quality-wallpaper_072526607_205.jpg)`
            }}
          >
            <div className="content-holder">
              <h3>ONBODY PICTURES</h3>
              <p>
                Combining Jewelry Visualization with real photos gives realistic
                proportions and a better understanding of how the product looks
                in real life.
              </p>
              <a href="#">EXPLORE</a>
            </div>
          </div>
          <div
            className="third-section"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/68740/diamond-gem-cubic-zirconia-jewel-68740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
            }}
          >
            <div className="content-holder">
              <h3>JEWELRY DESIGNS</h3>
              <p>
                As Jewelry Visualization artists we see many designs from around
                the world, many of them similar and lacking inspiration. We want
                to use our vision to create something special and unique,
                inspired by nature and organic, parametric shapes we create
                complex, modern, multi level structure and detailed pieces.
              </p>
              <br />
              <a href="#">EXPLORE</a>
            </div>
          </div>
          <div
            className="fourth-section master-setup"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/371102/pexels-photo-371102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
            }}
          >
            <div className="content-holder">
              <h3>MASTER SETUP</h3>
              <p>
                Already have a modelling / visualization team? We'll provide all
                necessary materials, knowledge and support to produce highest
                quality jewellery visualizations resulting in your own
                production of the very best visualizations on the market.
              </p>
              <a href="#">EXPLORE</a>
            </div>
          </div>

          <div class="middle-text container text-center py-5">
            <div class="wrapper_800">
              <h3>WHY WE?</h3>
              <p>
                <p>
                  22,000+ Visualizations completed for over 40 clients around
                  the world
                  <br />
                  _<br />
                  Quality without compromise
                  <br />
                  _<br />
                  No need to send us physical pieces
                  <br />
                  _<br />
                  You can sell your jewelry before manufacturing
                  <br />
                  _<br />
                  Any reference type supported - standard picture made by phone,
                  CAD/STL manufacturing files
                  <br />
                  _<br />
                  Multiple materials presentation
                  <br />
                  _<br />
                  Position identity
                  <br />
                  _<br />
                  Physically accurate materials
                </p>
              </p>
            </div>
          </div>

          <div className="links-container container">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://images.pexels.com/photos/1454994/pexels-photo-1454994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="https://images.pexels.com/photos/618701/pexels-photo-618701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img
                  src="https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  src="https://images.pexels.com/photos/1660521/pexels-photo-1660521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="about-us container">
            <button className="btn btn-md btn-secondary">ABOUT US</button>
            <button className="btn btn-md btn-secondary">CONTACT US</button>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
