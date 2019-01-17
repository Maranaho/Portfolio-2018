import React from 'react';
import './Presentation.css';

const Presentation = (p) => (
  <main id="presentation" className="homeBGVidCtn">
    <video
      className="homeBGVid"
      preload="metadata"
      alt="alt"
      poster=""
      controlsList="nodownload"
      muted
      autoPlay
      style={{transform: 'translateY(' + Math.round(p.vidBg*.4) + 'px'}}
      loop>
        <source
        type="video/mp4"
        src="https://quickbooks.intuit.com/content/dam/intuit/quickbooks/i18n/fr/fr/assets-su2017/video/benefit_video_creer_facture.mp4"></source >
      </video>
    </main>
);

export default Presentation;
