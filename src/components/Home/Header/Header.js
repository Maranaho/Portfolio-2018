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
      <strong className="xtra">Creative</strong>
      <span className="thin">Engineer</span>
    </h3>
    <div className="scrollHeader"><button onClick={p.scrollTo} idx="0">What I do</button></div>
  </main>
);

export default Header;
