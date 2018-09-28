import React from 'react'

const Filters = p => (
  <div className="filters">
    <input onChange={p.filter.bind(this)} type="text" placeholder="Search Repos"/>
    <ul id="filters">
      <li id="All" className={p.allOut} onClick={p.sort}>All</li>
      {p.filters.map((f,i) =>{
        return <li className={f.className} onClick={p.sort} id={f.name} key={i+'_'+f.name} >{f.name}</li>
      })}
    </ul>
  </div>
)
export default Filters
