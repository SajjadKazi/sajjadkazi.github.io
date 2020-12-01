import React from 'react'

function Navbar() {
    return (
        <>
        {/* Using link instead of Href bc of React Router 
        Using to instead of Href*/}
       <div className = "navbar">
        <div className = "navbar - container container">
        ATHLETES
       <link to='/' className= "navbar-logo">
       </link>
       <div className="menu-icon">
           
      </div>        
    </div>         
    </div>    
        </>
    )
}

export default Navbar
