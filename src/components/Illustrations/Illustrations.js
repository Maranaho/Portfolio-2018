import React, { Component } from 'react'
import Images from './Images'
import Illu from './Illu'
import './Illustrations.css'
import NextPrv from './NextPrv'

class Illustrations extends Component {
  constructor(){
    super()

    this.state = {
      description:Images[0].title,
      hasScroll: false,
      pos:50,
      listLength:Images.length,
      listWidth:5000,
      showCompactStatusBar: false
    }

    this.handleWheel = this.handleWheel.bind(this)
    this.handleMDown = this.handleMDown.bind(this)
    this.handleMUp = this.handleMUp.bind(this)
    this.handleNxtPrv = this.handleNxtPrv.bind(this)
    this.setProperWidth = this.setProperWidth.bind(this)

  }






  handleWheel(e){
    let s = this.state
    let p = s.pos
    let move = s.pos + -e.deltaY
    if (this.state.hasScroll) {
      if (p < 50  || e.deltaY === 100) {
        if (move > 50) {move = 50}
        this.setState({pos:move})
      }
    } else { this.setState({hasScroll:true}) }
  }

  handleMDown(e){
    this.setState({start:e.clientX})
  }

  handleMUp(e){
    let s = this.state
    let move
    if (s.start && s.pos <= 50) {
      move = (s.pos - s.start + e.clientX)
      if (move > 50) { move = 50 }
      this.setState({pos:move})
    }
  }

  handleNxtPrv(e){
    //let move
    const
    nxt = e.target.id === 'nxt';
    if (nxt) {
      //@TODO trouver ou on est
    }
    //this.setState({pos:move})
  }

  setProperWidth(){
    const s = this.state;
    if (s.listWidth === 5000) {
      let listElt = document.getElementById('illusList')
      this.setState({ listWidth: listElt.children[0].clientWidth * s.listLength})
    }
  }

  render(){
    const
    folder = 'img/',
    s = this.state;
    return (
      <main className="illus">
        <NextPrv handleNxtPrv={this.handleNxtPrv}/>
        <ul
          id="illusList"
          style={{transform:'translateX('+s.pos+'px)',width: s.listWidth}}
          onWheel={this.handleWheel}
          onDragStart ={this.handleMDown}
          onDragEnd ={this.handleMUp}
          onMouseEnter ={this.setProperWidth}
          className="illustrations">{Images
          .map(i => {
            return (
              <Illu
                ratio={i.ratio}
                key={i.name}
                folder={folder}
                format={i.format}
                name={i.name}/>
              )
          })}
        </ul>
        <p className="imageDescription">{s.description}</p>
      </main>
    )
  }
}
export default Illustrations
