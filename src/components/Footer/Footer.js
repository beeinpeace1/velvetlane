import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
          <div className="footer">
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
    )
  }
}

export default  Footer;