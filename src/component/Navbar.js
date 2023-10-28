import React from 'react'
import {Link} from "react-router-dom"
import '../component/Navbar.css'
import Image from '../assets/logo_img.png';
const Navbar=()=> {
    return (
    <div className='navbar'>
    <div className="logo">
        <img src={Image} alt='This is a Component'></img>
    </div>
    <ul className="list">
    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/newsapp">Home</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
             <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
    </ul>
    </div>
    );
  }


export default Navbar