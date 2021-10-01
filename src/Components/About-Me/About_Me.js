import React from 'react';
import './About_Me.css';
import Content from './Content';
import { useState } from 'react';
const About_Me=()=> {
    var [number,setNumber]=useState(0);
    const all=["Images/abad.png" ,"Images/apri.png","Images/bane.png","Images/apri.png","Images/nalie.png","Images/v1.png"];
    const logo=["Images/bane.png"];
    const weSites=["Images/abad.png" ,"Images/apri.png","Images/v1.png","Images/bane.png"];
    const mobileApp=["Images/v1.png" ,"Images/apri.png"];
    return (
        <section className="aboutme-section">
          <div className="container">
          <div className="about-wrapper">
                <div className="about-detail">
                    <h3>About Me</h3>
                    <div className="para-wrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <button>Download Cv</button>
                </div>
               
                <figure>
                    <img src="Images\aboutme-img.png" alt="aboutme pic"/> 
                </figure>
            </div>

            <div className="portfolio-wrapper">
                <div className="head-btn-wrapper">
                   <h4>Portfolio</h4> 
                   <div className="btn-wrapper">
                     <a href="">  <button>&lt;</button></a>
                      <a href=""> <button>&gt;</button></a>
                   </div>
                </div>
                <nav>
                   <ul>
                       <li onClick={()=>setNumber(number=0)}>All</li>
                       <li onClick={()=>setNumber(number=1)}>Logo</li>
                       <li onClick={()=>setNumber(number=2)}>Websites</li>
                       <li onClick={()=>setNumber(number=3)}>Mobile Apps</li>
                   </ul>
                </nav>
            
               <div className="portfolio-content">
               
                        {number==0 ? <Content imgArr={all} /> : <></>}
                       { number==1 ? <Content imgArr={logo} /> : <></>}
                        { number==2 ? <Content imgArr={weSites} /> :<></>}
                        { number==3 ? <Content imgArr={mobileApp} /> : <></>}
            
                </div>
      
            </div>
     
         </div>
        </section>
    )
}

export default About_Me
