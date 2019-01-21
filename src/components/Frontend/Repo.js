import React from 'react';
const Repo = p => (
    <li>
      <h3 className="xtra"><a href={p.url} target="_blank">{p.name}</a></h3>
      <ul>{p.topics.map((t,i) => <li className={`bold t3 uppercase ${t.css}`} key={i}>{t.name}</li>)}</ul>
      <span>{p.description}</span><br/>
      <span>{new Date(p.date).toLocaleDateString()}</span><br/>
      <input type="text" value={p.clone} readOnly onClick={p.copyFn.bind(this)}/>
    </li>
  )
export default Repo
