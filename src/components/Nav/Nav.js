import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = (p) => (
  <section id="nav" className={p.top ? 'top' : ''}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/github">Frontend</Link></li>
        <li><Link to="/illustrations">Illustrations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </section>
)

export default Nav
