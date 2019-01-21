import React, { Component } from 'react'
import Header from './Header/Header'
import Presentation from './Presentation/Presentation'
import Resume from './Resume/Resume'
import './Home.css'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      vidBg: -(window.innerHeight *95/100)/4,
      vidBg1: (window.scrollY - window.innerHeight *90/100) - (window.innerHeight *90/100)/4,
      halfVH: (window.innerHeight *90/100)/4,
      desk: window.innerWidth >= 1024 && window.innerHeigth >= 850,
      navIsWhite : true
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.setParalax = this.setParalax.bind(this)
    this.scrollTo = this.scrollTo.bind(this)
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
  }



  componentWillMmount() {
    this.handleScroll()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }



  setParalax(){
      this.setState({
        vidBg: Math.round(window.scrollY - this.state.halfVH),
        vidBg1: Math.round((window.scrollY - window.innerHeight *90/100) - this.state.halfVH),
      })
  }

  scrollTo(e){
    let pos;
    if (e.target.getAttribute('idx') === '0') {
      pos = document.getElementById('presentation').getBoundingClientRect().top
    } else if(e.target.getAttribute('idx') === '1'){
      pos = document.getElementById('resume').getBoundingClientRect().top
    } else {
      pos = document.getElementById('header').getBoundingClientRect().top
    }
    window.scrollBy({
      top: pos,
      left: 0,
      behavior: 'smooth'
    })
  }




  handleScroll() { this.setParalax() }

  render(){
    return (
      <main id="home">
        <Header scrollTo={this.scrollTo} vidBg={this.state.vidBg}/>
        <Presentation scrollTo={this.scrollTo} vidBg1={this.state.vidBg1}/>
        <Resume scrollTo={this.scrollTo}/>
      </main>
    )
  }

}

export default Home
