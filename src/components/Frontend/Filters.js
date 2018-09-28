import React from 'react'

const Filters = p => (
  <div className="filters">
    <input onChange={p.filter.bind(this)} type="text" placeholder="Search Repos"/>
    <ul id="filters">
      <li id="all" className={p.allOut + ' t3'} onClick={p.sort}>All</li>
      {p.filters.map((f,i) =>{
        return <li className={p.css[i] + ' uppercase t3'} idx={i} onClick={p.sort} id={f} key={i+'_'+f} >{f}</li>
      })}
    </ul>
  </div>
)
export default Filters
