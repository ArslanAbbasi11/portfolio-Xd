import React from 'react'
import './Footer.css'
import Social_links from '../Social-Links/Social_links'
const Footer=()=> {
    return (
      <footer>
          <h3>Portfolio</h3>
          <p className="contact-para">About  |  Portfolio  |  Contact <br/>NY / +1 123456 7890 / hello@graphics.studio.com</p>
        <Social_links/>
      <p className="copy-rights">Copyright &copy; 2019 Graphics Studio | All rights reserved</p>
      </footer>
    )
}

export default Footer
