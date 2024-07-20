import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = (p) => (
  <main id="nav">
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/prototypes">JSXperiments</Link></li>
        <li><Link to="/illustrations">Illustrations</Link></li>
      </ul>
    </nav>
  </main>
)

export default Nav
