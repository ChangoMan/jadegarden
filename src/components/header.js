import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/img/logo.png'

const Header = () => (
  <header
    className="banner navbar navbar-default navbar-static-top"
    role="banner"
  >
    <div className="container">
      <div className="navbar-header">
        {/* <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button> */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Honeybee Asian Bistro" />
        </Link>
      </div>
      <nav className="navbar-collapse in" role="navigation">
        <ul id="menu-primary-navigation" className="nav navbar-nav">
          <li className="menu-home">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-location">
            <Link to="/location">Location</Link>
          </li>
          <li className="menu-menu">
            <Link to="/chefs-specials-vegetables">Menu</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
