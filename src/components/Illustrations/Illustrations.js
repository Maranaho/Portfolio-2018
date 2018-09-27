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
      showCompactStatusBar: false,
      itm1st: true,
      itmlast: false
    }

    this.handleWheel = this.handleWheel.bind(this)
    this.handleMDown = this.handleMDown.bind(this)
    this.handleMUp = this.handleMUp.bind(this)
    this.handleNxtPrv = this.handleNxtPrv.bind(this)
    this.setProperWidth = this.setProperWidth.bind(this)

  }






  handleWheel(e){
    let lastFewItems = 0
    const
    s = this.state,
    p = s.pos,
    listElt = document.getElementById('illusList'),
    list = Array.from(listElt.children),
    lgn = s.listLength,
    vw = window.innerWidth,
    itmOnScreen = Math.round(vw/(s.listWidth/lgn));
    for (let i = 0; i < itmOnScreen; i++) {
      lastFewItems = lastFewItems + list[lgn - (i+1)].clientWidth
    }

    //@TODO Maybe this belongs in the state


    if (p >= -(s.listWidth - lastFewItems)) {
      let move = s.pos + -e.deltaY
      if (this.state.hasScroll) {
        if (p < 50  || e.deltaY === 100) {
          if (move > 50) {move = 50}
          this.setState({pos:move})
        }
      } else { this.setState({hasScroll:true}) }
    } else { this.setState({pos:-(s.listWidth - lastFewItems)}) }
  }

  handleMDown(e){ this.setState({start:e.clientX}) }

  handleMUp(e){
    let s = this.state
    let move
    if (s.start && s.pos <= 50) {
      move = (s.pos - s.start + e.clientX)
      console.log(move);
      if (move >= 50) { move = 50 }
      if (move <= 50) { move = 50 }
      this.setState({pos:move})
    }
  }

  handleNxtPrv(e){
    let move
    const
    nxt = e.target.id === 'nxt',
    s = this.state,
    itm = s.listWidth / s.listLength
    if (nxt) { move = s.pos - itm } else { move = s.pos + itm }
    this.setState({pos:move})
  }

  setProperWidth(){
    const s = this.state;
    if (s.listWidth === 5000) {
      let w = 0
      let listElt = document.getElementById('illusList')
      Array.from(listElt.children).map(c=> w = w + c.clientWidth)
      this.setState({ listWidth: w})
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
