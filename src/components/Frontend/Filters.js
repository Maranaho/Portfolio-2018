import React from 'react'

const Filters = p => (
  <section className="filters">
    <input onChange={p.filter.bind(this)} type="text" placeholder="Search Repos"/>
    <ul id="filters">
      {p.filters.map((f,i) =>{
        return <li onClick={p.sort} key={i}>{f}</li>
      })}
    </ul>
  </section>
)
export default Filters
