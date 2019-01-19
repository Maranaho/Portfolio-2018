import React from 'react';

const ResumeNxtPrv = (props)=>
  <article
  id="resumeNxtPrv"
  onClick={props.nxtPrv}
  className={`${props.first ? 'first' : ''}${props.last ? 'last' : ''}`}>
    <button id="prv"className="uppercase xtra">Prv</button>
    <button id="nxt"className="uppercase xtra">Nxt</button>
  </article>

export default ResumeNxtPrv;
