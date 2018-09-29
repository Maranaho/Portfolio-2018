import React from 'react'

const Filters = p => (
  <div className="filters">
    <input onChange={p.filter.bind(this)} type="text" placeholder="Search Repos"/>
    <ul id="filters" onClick={p.sort}>
      <li id="all" className={p.allOut + ' t3'} >All</li>
      {p.filters.map((f,i) =>{
        return <li className={p.css[i] + ' uppercase t3'} idx={i} id={f} key={i+'_'+f} >{f}</li>
      })}
    </ul>
  </div>
)
export default Filters
