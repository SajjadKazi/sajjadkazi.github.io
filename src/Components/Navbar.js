import React from 'react'
import { Link } from 'react-router-dom';
import {GiWhistle} from 'react-icons/gi';
import {FaBars} from 'react-icons/fa';

function Navbar() {
    return (
        <>
        {/* Using link instead of Href bc of React Router 
        Using to instead of Href*/}
       <div className = 'navbar'>
        <div className = 'navbar-container container'>
       <Link to='/' className= 'navbar-logo'>
        <GiWhistle className='navbar-icon'/>
        ATHLETES
       </Link>
       <div className='menu-icon' />
           
     </div>        
    </div>         
      
        </>
    )
}

export default Navbar
