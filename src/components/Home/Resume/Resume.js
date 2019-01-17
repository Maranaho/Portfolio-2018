import React from 'react';
import ResumeData from './ResumeData';
import './Resume.css';

const Resume = () => (
  <main id="resume">
    <section>
      <ul id="pro">
        {ResumeData.map((i,idx)=>
        <li key={idx}>
          <h3>{i.year}</h3>
          <h4>{i.title}</h4>
          <h5>{i.des}</h5>
          <p>{i.txt}</p>
          {i.links &&
            <ul>
            {i.links.map((l,idxl)=>
              <li key={idxl}><a target="_blank" href={l.lk}>{l.txt}</a></li>
            )}
            </ul>
          }
        </li>)}
      </ul>
      <ul id="education"></ul>
    </section>
  </main>
);

export default Resume;
