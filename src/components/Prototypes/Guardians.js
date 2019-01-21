import React from 'react';
import { Link } from 'react-router-dom'
const Guardians = () => (
  <div className="guardians">
    <main id="prototypeContent">
      <section className="protoContent">
      <article>
        <h3>The challenge</h3>
        <p>This app lets you pick your seats to go watch a film. Watch your selected seats update as you make you reservation.</p>
        <p>The app also tells you chat row and seat you've chosen. Pretty cool ! As usual HTML CSS and JS only.</p>
        <div className="prototypeNav">
          <Link to="/prototypes/chat">←Prev</Link>
          <Link to="/prototypes/dashboard">Next→</Link>
        </div>
      </article>
      </section>
    </main>
    <main className="prototype"><iframe title="guardians" src="/comps/guardians/"></iframe></main>
  </div>
);

export default Guardians;
