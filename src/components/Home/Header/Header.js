import React from 'react';
import './Header.css';
const Header = (p) => (
  <main
  id="header"
  className="homeBGVidCtn"
  /*style={{backgroundPosition: 'center ' + Math.round(p.vidBg*.6) + 'px'}}>*/
  >
    <video
      className="homeBGVid"
      preload="metadata"
      alt="alt"
      poster=""
      controlsList="nodownload"
      muted
      autoPlay
      style={{transform: 'translateY(' + Math.round(p.vidBg*.6) + 'px'}}
      loop>
        <source
        type="video/mp4"
        src="https://quickbooks.intuit.com/content/dam/intuit/quickbooks/i18n/fr/fr/assets-su2017/video/quickbooks-logiciel-gestion.mp4"></source >
      </video>
  </main>
);

export default Header;
