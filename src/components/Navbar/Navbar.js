import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import './Navbar.css'

const Navbar = () => {
  const cookies = new Cookies()

  return (
    <nav className="container navbar">
      <Link to="/">
        <div className="logo">
          <i className="far fa-calendar-alt fa-2x"></i> <h2>Calendar</h2>
        </div>
      </Link>
      <div className="menu">
        <ul className="menu-items">
          <Link to="/">
            <li className="menu-item">
              <i className="fas fa-search fa-2x"></i>
            </li>
          </Link>
          <Link to="/">
            <li className="menu-item">
              <i className="fas fa-adjust fa-2x"></i>
            </li>
          </Link>
          <Link to="/contact-us">
            {' '}
            <li className="menu-item">
              <i className="far fa-envelope fa-2x"></i>
            </li>
          </Link>

          <Link to={cookies.get('userToken') ? '/profile' : '/login'}>
            <li className="menu-item">
              <i className="far fa-user fa-2x"></i>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
