import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Github from './Frontend/Github';
import Illustrations from './Illustrations/Illustrations';
import Contact from './Contact/Contact';
import Repo from './Frontend/Repo';
import Footer from './Footer/Footer';

class Main extends Component {

constructor(props) {
  super(props)
  this.state = {
    navIsWhite: true
  }

    this.changeNavColor = this.changeNavColor.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
}

changeNavColor() {
    if (window.scrollY + 100 >= window.innerHeight*2) {
        if (this.state.navIsWhite) {
            this.setState({navIsWhite: false})
        }
    } else {
        if (!this.state.navIsWhite) {
            this.setState({navIsWhite: true})
        }
    }
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll() {
    this.changeNavColor()
}

  render(){
    return (
      <main>
        <Nav top={this.state.navIsWhite}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/illustrations" component={Illustrations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/github/repo/:id" component={Repo} />
        </Switch>
        <Footer/>
      </main>
    )
  }
}



export default Main;
