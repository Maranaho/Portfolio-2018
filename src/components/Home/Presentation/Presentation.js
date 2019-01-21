import React from 'react';
import './Presentation.css';

const Presentation = (p) => (
  <main
  id="presentation"
  className="homeBGVidCtn"
  style={{backgroundPosition: 'center ' + p.vidBg1*.95 + 'px'}}>


    <header>
      <h2 className="xtra"><span className="bl">I build</span><span className="bl">user</span><span className="bl">interfaces</span><span>with </span><strong>React</strong></h2>
      <p className="demi">Hi everyone, my name is Maranaho, I’m 33 I come from the beautiful region of Brittany in France and I live in the great city of London.<br/>
      <br/>I am an <strong>Art graduate</strong> with ES6 Vanilla <strong>JavaScript programming</strong> skills which basically makes me a Ninja / Unicorn.</p>
      <p>Also in 2016 cack in France I was a <strong>Frontend development teacher</strong> for UI Design students in an Art school.<br/>
      This was a game changing mind opening experience.</p>
    </header>
    <div className="scrollHeader"><button onClick={p.scrollTo} idx="1">My resumé</button></div>

  </main>
);

export default Presentation;
