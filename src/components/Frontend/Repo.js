import React from 'react';
const Repo = p => (
    <li>
      <h3><a href={p.url} target="_blank">{p.name}</a></h3>
      <ul>{p.topics.map((t,i) => <li key={i}>{t}</li>)}</ul>
      <span>{p.description}</span><br/>
      <span>{new Date(p.date).toLocaleDateString()}</span><br/>
      <input type="text" value={p.clone} readOnly onClick={p.copyFn.bind(this)}/>
      <p><a target="_blank" href={`https://${p.username}.github.io/${p.name}/`}>Demo</a></p>
    </li>
  )
export default Repo
