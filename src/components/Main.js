import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Github from './Frontend/Github'
import Illustrations from './Illustrations/Illustrations'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Prototypes from './Prototypes/Prototypes'
import Player from './Prototypes/Player'
import Dashboard from './Prototypes/Dashboard'
import Mapster from './Prototypes/Mapster'
import Chat from './Prototypes/Chat'
import Guardians from './Prototypes/Guardians'
import Pricing from './Prototypes/Pricing'
import MTD from './Prototypes/MTD'

class Main extends Component {


componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

  render(){
    return (
      <main>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/illustrations" component={Illustrations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/prototypes" component={Prototypes} />
          <Route exact path="/prototypes/player" component={Player} />
          <Route exact path="/prototypes/dashboard" component={Dashboard} />
          <Route exact path="/prototypes/pricing" component={Pricing} />
          <Route exact path="/prototypes/guardians" component={Guardians} />
          <Route exact path="/prototypes/mapster" component={Mapster} />
          <Route exact path="/prototypes/chat" component={Chat} />
          <Route exact path="/prototypes/mtd" component={MTD} />
          <Route component={Home} />
        </Switch>
        <Footer/>
      </main>
    )
  }
}



export default Main
