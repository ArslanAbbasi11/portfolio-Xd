import React from 'react'
import './Hire_Me.css'
const Hire_Me=()=> {
    return (
       <section className="hire-section">
         <div className="container">
         <h4>Let’s Make Something
                  Great Together</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
             
             <form>
                 <input type="text" placeholder="Name"/>
                 <input type="email" placeholder="Name"/>
                 <input type="number" placeholder="Name"/>
                <select>
                    <option> Budget</option>
                    <option>  2500  </option>
                    <option>  3500  </option>
                    <option>  45000  </option>
                    <option>  55000  </option>
                </select>
                <textarea placeholder="Message"/>
                <button className="hire-btn">Hire Me</button>
             </form>

         </div>
 </section>
    )
}

export default Hire_Me
