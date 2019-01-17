import React, { Component } from 'react';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import Resume from './Resume/Resume';
import './Home.css';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resizeTimer: null,
      vidBg:0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.optinScroll = this.optinScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  optinScroll() {
    clearTimeout(this.state.resizeTimer)
   this.setState({resizeTimer: setTimeout(this.handleScroll, 0)})
  }


  handleScroll() {
    this.setState({vidBg: window.scrollY})
  }

  render(){
    return (
      <main>
        <Header vidBg={this.state.vidBg}/>
        <Presentation vidBg={this.state.vidBg}/>
        <Resume/>
      </main>
    )
  }

}

export default Home;
