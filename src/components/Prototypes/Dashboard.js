import React, { Component} from 'react'
import { Link } from 'react-router-dom'
class Dashboard extends Component {

  componentDidMount(){
    document.getElementById('nav').classList.add('dash')
  }
  componentWillUnmount(){
    document.getElementById('nav').classList.remove('dash')
  }
  render(){
    return (
      <div className="dash">
        <main id="prototypeContent">
          <section className="protoContent">
          <article>
            <div className="prototypeNav">
              <Link to="/prototypes/guardians">←Prev</Link>
              <Link to="/prototypes/mapster">Next→</Link>
            </div>
          </article>
          </section>
        </main>
        <main className="prototype"><iframe title="dashboard" src="/comps/dashboard/"></iframe></main>
      </div>
    )
  }
}
export default Dashboard
