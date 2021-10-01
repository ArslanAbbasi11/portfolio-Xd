import React from 'react'
import './Capabilities.css';
const Capabalities=()=> {
    const myCap=["Images/Group78.png","Images/Group78.png","Images/Group78.png","Images/Group78.png","Images/Group78.png","Images/Group78.png"];
    return (
      <section className="cap-sec">
          <div className="container">
            <h3>My Capabilities</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
            <div className="cap-inner">
             {
          myCap?.map((value)=>(
                    <div className="cap-wrapper">
                         <figure>
                           <img src={value}/>
                        </figure>
                        <h4>Web Design</h4>
                        <p>Get awesome design services
                           from inkyy.com </p>
                    </div>
          ))

          }
          </div>
          </div>
      </section>
    )
}

export default Capabalities
