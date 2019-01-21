import React from 'react'
const NextPrv = p => (
  <div onClick={p.handleNxtPrv} className="NextPrv">
    <button id="prv" className="bold" disabled={p.itm1st}>←Prev</button>
    <button id="nxt" className="bold" disabled={p.itmlast} >Next→</button>
  </div>
)
export default NextPrv
