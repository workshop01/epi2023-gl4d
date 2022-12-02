import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
        <nav className='navbar bg-primary'>
                <div className='nav-item'> <NavLink to="/" activeclassname='active' >Feedback  </NavLink></div>
                <div className='nav-item'> <NavLink to="/evenement" activeclassname='active' >Evenements  </NavLink></div>
                <div className='nav-item'> <NavLink to="/basics" activeclassname='active' >Basics  </NavLink></div>
                <div className='nav-item'> <NavLink to="/login" activeclassname='active' >Login  </NavLink></div>
                <div className='nav-item'> <NavLink to="/cv/mohamed" activeclassname='active' >CV  </NavLink></div>
                <div className='nav-item'> <NavLink to="/cv/ali" activeclassname='active' >CV  </NavLink></div>

            </nav>
   
  )
}
