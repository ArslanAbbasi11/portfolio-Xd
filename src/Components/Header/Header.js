import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Social_links from '../Social-Links/Social_links';
const Header=()=> {
    return (
       <header>
            <div className="container">
                   <div className="header-inner">
                       {/*upper header starts here  :contain logo ,nav and button*/}
                      <div className="header-upper">
                       <figure className="logo"><a href="#"><img src="Images/Portfolio.png" alt=""/></a></figure>
                       <figure className="layer2"><img src="Images\Layer 2 copy.png" alt=""/></figure>
                       <nav>
                           <ul>
                               <li><a href="#about">About</a></li>
                               <li><a href="#portfolio">Portfolio</a></li>
                               <li><a href="#contact">Contact</a></li>
                           </ul>
                       </nav>
                       <button>Get Started</button>
                      </div>
                       {/*upper header ends here  */}
                       <div className="lower-header">
                           <img src="Images/Ellipse1.png" alt="ellipse"/>
                          <div className="left-wrapper">
                              <h1>
                                  <span>Hello, i am</span>
                                  Mark Rccardo
                              </h1>
                              <p>A young <span>UI/UX</span> designer with crazy for mobile & web design.</p>
                              <nav >
                                  <h3>Find Me on</h3>
                                <Social_links/>
                              </nav>
                              <div className="buttons">
                                  <button className="hire-btn">Hire Me</button>
                                  <button className="portfolio-btn">Portfolio</button>
                              </div>
                          </div>
                         <figure className="right-wrapper">
                                    <img src="Images/Layer4.png" alt="your portfolio image"/>
                                    
                         </figure>
                         
                       </div>
               <img src="Images/Layer2.png" className="layer2-img"/>
                  </div>
            </div>
       </header>
    )
}

export default Header
