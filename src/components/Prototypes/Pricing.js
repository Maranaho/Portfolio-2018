import React, { Component} from 'react'
import { Link } from 'react-router-dom'
class Pricing extends Component {

  componentDidMount(){
    document.getElementById('nav').classList.add('price')
  }
  componentWillUnmount(){
    document.getElementById('nav').classList.remove('price')
  }
  render(){
    return (
      <div className="pricing">
        <main id="prototypeContent">
          <section className="protoContent">
          <article>
            <div className="prototypeNav">
              <Link to="/prototypes/player">←Prev</Link>
              <Link to="/prototypes/chat">Next→</Link>
            </div>
          </article>
          </section>
        </main>
        <main className="prototype"><iframe title="pricing" src="/comps/pricing/"></iframe></main>
      </div>
    )
  }
}
export default Pricing
