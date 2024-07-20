import React from 'react'
import './Apples.css'
import './Prototypes.css'
import { Link } from 'react-router-dom'

const Prototypes = () => (
  <div>
    <main id="prototypeContent">
      <section>
        <div className="protoContent">
          <h1 className="xtra">JSX'periments</h1>
          <p>So here's what I love to do, experimenting.</p>
          <p>JavaScript is not just for CS people, it's a fun language and I want more designers to try it. Being able to technically bring your design ideas to real life is not only very satisfying, it also unlocks your creativity.</p>
          {/* <ul>
            <li><button>JavaScript</button></li>
            <li><button>CSS</button></li>
            <li><button>React Native</button></li>
            <li><button>Angular</button></li>
            <li><button>Angular2</button></li>
            <li><button>Webpack</button></li>
            <li><button>NPM</button></li>
            <li><button>Atom</button></li>
            <li><button>Cmdr</button></li>
            <li><button>Photoshop</button></li>
            <li><button>Illustrator</button></li>
            <li><button>After Effects</button></li>
            <li><button>Cinema 4D</button></li>
            <li><button>ZBrush</button></li>
            <li><button>Octane</button></li>
          </ul> */}
        </div>
      </section>
    </main>
    <main id="prototypes" className="pTop">
      <section id="prototypesList">
        <aside>
            <ul>
              <li><img src="./img/prototypes/article.gif" alt="app animation"/></li>
              <li><Link to="/prototypes/pricing"><img src="./img/prototypes/pricing.png" alt="pricing cards"/></Link></li>
              <li className="matrix"><em>Apples<br/>&amp; Lemons</em><small>and mint</small><span></span><i></i><i></i><i></i><i></i><i></i><i></i><b></b></li>
              <li><Link to="/prototypes/dashboard"><img src="./img/prototypes/3.png" alt="D3JS"/></Link></li>
          </ul>
          <ul>
              <li><Link to="/prototypes/chat"><img src="./img/prototypes/4.png" alt="live chat app"/></Link></li>
              <li><Link to="/prototypes/player"><img src="./img/prototypes/1.png" alt="js mp3 player"/></Link></li>
              <li><Link to="/prototypes/mapster"><img src="./img/prototypes/2.png" alt="Google maps api"/></Link></li>
              <li><Link to="/prototypes/guardians"><img src="./img/prototypes/5.png" alt="cinema reservation app"/></Link></li>
              <li><Link to="/prototypes/mapster"><img src="./img/prototypes/8.png" alt="Google maps api"/></Link></li>
          </ul>
      </aside>
      </section>
    </main>
  </div>
);

export default Prototypes;
