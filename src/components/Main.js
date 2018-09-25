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

  render(){
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/illustrations" component={Illustrations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/github/repo/:id" component={Repo} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}



export default Main;
