import React from 'react'


const Navbar= () => {

    return(
        <>
        <div>
      <nav>
        <div className="logo">
          <img src='/Images/brand_logo.png' alt='logo' ></img>
        </div>
        <div className="middle">
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <div className="last">
          <button>Login</button>
        </div>
      </nav>
    </div>
    </>
    )
} 

export default Navbar