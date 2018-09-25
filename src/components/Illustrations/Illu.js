import React from 'react'
const Illu = p => <li><img
  style={{transform:'scale('+p.ratio+')'}}
  src={p.folder + p.name +'.' + p.format}
  alt={p.name}
  name={p.name}/></li>
export default Illu
