import React from 'react'
import { Link } from 'react-router-dom'
import './Prototypes.css'
const Chat = () => (
  <div>
    <main id="prototypeContent">
      <section className="protoContent">
        <article>
          <h3>The challenge #1</h3>
          <p>Setting the temperature by hovering over the little indentations which are just divs placed and manipulated with pure HTML CSS and javascript.</p>
          <h3>The challenge #2</h3>
          <p>Make a funny chat application with javascript.</p>
          <p>Go ahead and make some jokes with Joe and Quentin they jsut might reply! JS only (No server I'm not storing anything don't worry) !</p>
          <div className="prototypeNav">
            <Link to="/prototypes/pricing">←Prev</Link>
            <Link to="/prototypes/guardians">Next→</Link>
          </div>
        </article>
      </section>
    </main>
    <main className="prototype">
      <iframe title="chat" src="/comps/chat/"></iframe>
    </main>
  </div>
)

export default Chat
