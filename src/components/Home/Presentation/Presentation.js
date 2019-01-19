import React from 'react';
import './Presentation.css';

const Presentation = (p) => (
  <main
  id="presentation"
  className="homeBGVidCtn"
  style={{backgroundPosition: 'center ' + p.vidBg1*.7 + 'px'}}>


    <header>
      <h2 className="xtra"><span>I build</span><span>user</span><span>interfaces</span><span>with</span><strong>React</strong></h2>
      <p class="demi">Hi everyone, my name is Maranaho, I’m 33 I come from the beautiful region of Brittany in France and I live in in the great city of London.
      <br/>I am an <strong>Art graduate</strong> with ES6 Vanilla <strong>JavaScript programming</strong> skills which basically makes me a Ninja / Unicorn.
      <br/>Also back in 2016 I was a <strong>Frontend development teacher</strong> for product design students in an Art school in France.</p>
      <p class="demi">I had the best time and <strong>I really miss teaching</strong> so this is a public announcement: I will chase any opportunity to teach again especially to designers!</p>
    </header>

  </main>
);

export default Presentation;
