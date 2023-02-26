import React from 'react'
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from '../data';



const Navbar = () => {
  return <div>
<nav className="navbar">
  <div className="nav-center">
    <img src= {logo} className="nav-logo" alt="backroads" />
      <button type="button" className="nav-toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    <ul className="nav-links" id="nav-links">
     {pageLinks.map((link) =>{
        return <li key={link.id}>
        <a href={link.href} className="nav-link"> {link.text} </a>

        </li>
     })}
     
    <ul className="nav-icons">
      {socialLinks.map((link)=>{
        const {id, href, icon} = link;
        return (<li key={id}>
                    <a href={href} target="_blank" className="nav-icon"
        rel="noopener noreferrer" ><i className={icon}></i></a>
        </li>
      );
    })}
      
      
 
    </ul>
  </ul>
  </div>
  </nav>
  </div>

}

export default Navbar