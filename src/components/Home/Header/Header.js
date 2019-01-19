import React from 'react';
import './Header.css';
const Header = (p) => (
  <main
  id="header"
  className="homeBGVidCtn"
  style={{backgroundPosition: 'center ' + p.vidBg*.8 + 'px'}}>
    <h1>Maranaho</h1>
    <h2 className="uppercase xtra">N'Guessan</h2>
    <h3>
      <strong className="xtra">JS</strong>
      <span className="thin">Programmer</span>
    </h3>
  </main>
);

export default Header;
