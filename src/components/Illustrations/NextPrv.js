import React from 'react'
const NextPrv = p => (
  <div onClick={p.handleNxtPrv} className="NextPrv">
    <button id="prv">Prev</button>
    <button id="nxt">Next</button>
  </div>
)
export default NextPrv
