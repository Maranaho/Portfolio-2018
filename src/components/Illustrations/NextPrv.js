import React from 'react'
const NextPrv = p => (
  <div onClick={p.handleNxtPrv} className="NextPrv">
    <button id="prv" disabled={p.itm1st}>Prev</button>
    <button id="nxt" disabled={p.itmlast} >Next</button>
  </div>
)
export default NextPrv
