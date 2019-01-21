import React from 'react';
import { Link } from 'react-router-dom'
const Player = () => (
  <div>
    <main id="prototypeContent">
      <section className="protoContent">
      <article>
        <h3>The challenge</h3>
        <p>The challenge was to create a music player with javascript and stylise the transparent phones and buttons with their shadows in CSS with no images.</p>
        <p>Listen to Pierre Bethmann my 2nd favourite pianist and composer after Herbie Hancock of course ;)</p>
        <div className="prototypeNav">
          <Link to="/prototypes/mapster">←Prev</Link>
          <Link to="/prototypes/pricing">Next→</Link>
        </div>
      </article>
      </section>
    </main>
    <main className="prototype"><iframe title="player" src="/comps/player/"></iframe></main>
  </div>
);

export default Player;
