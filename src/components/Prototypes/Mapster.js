import React, { Component} from 'react'
import { Link } from 'react-router-dom'
class Mapster extends Component {

  componentDidMount(){
    document.getElementById('nav').classList.add('mapster')
  }
  componentWillUnmount(){
    document.getElementById('nav').classList.remove('mapster')
  }
  render(){
    return (
      <div className="mapster">
        <main id="prototypeContent">
          <section className="protoContent">
          <article>
            <div className="prototypeNav">
              <Link to="/prototypes/dashboard">←Prev</Link>
              <Link to="/prototypes/player">Next→</Link>
            </div>
          </article>
          </section>
        </main>
        <main className="prototype"><iframe title="mapster" src="/comps/mapster/"></iframe></main>
      </div>
    )
  }
}
export default Mapster
