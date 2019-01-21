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
      itmlast: false,
      vw: window.innerWidth,
    }

    this.handleWheel = this.handleWheel.bind(this)
    this.handleMDown = this.handleMDown.bind(this)
    this.handleMUp = this.handleMUp.bind(this)
    this.handleNxtPrv = this.handleNxtPrv.bind(this)
    this.setProperWidth = this.setProperWidth.bind(this)

  }




  lastFewItems(){
    let lastFewItems = 0
    const
    s = this.state,
    lgn = s.listLength,
    listElt = document.getElementById('illusList'),
    list = Array.from(listElt.children),
    itmOnScreen = Math.round(s.vw/(s.listWidth/s.listLength));
    for (let i = 0; i < itmOnScreen; i++) {
      lastFewItems = lastFewItems + list[lgn - (i+1)].clientWidth
    }
    return lastFewItems
  }


  handleWheel(e){
    const
    s = this.state,
    p = s.pos,
    lastFewItems = this.lastFewItems();

    if (p >= -(s.listWidth - lastFewItems)) {
      let move = s.pos + -e.deltaY;
      if (s.hasScroll) {
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
      if (move >= 50) { move = 50 }
      this.noFurther(s,move,s.pos)
    }
  }

  handleNxtPrv(e){
    let move
    const
    nxt = e.target.id === 'nxt',
    s = this.state,
    itm = s.listWidth / s.listLength
    if (nxt) { move = s.pos - itm } else { move = s.pos + itm }
    this.noFurther(s,move,s.pos)
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

  noFurther(s,m,p){
    let itm1st = false; let itmlast = false;
    if (m <= -(s.listWidth - this.lastFewItems())) {
      m = -(s.listWidth - this.lastFewItems())
      itmlast = true
    }
    if (m > 50) {
      m = 50
      itm1st = true
    }
    this.setState({ pos:m, itm1st, itmlast })
  }

  render(){
    const
    folder = 'img/illus/',
    s = this.state;
    return (
      <main className="illus">
        <NextPrv
          itm1st={s.itm1st}
          itmlast={s.itmlast}
          handleNxtPrv={this.handleNxtPrv}/>
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
          <li><button onClick={()=>this.setState({pos:50,itm1st:true,itmlast:false})}>←Go back</button></li>
        </ul>
        <p className="imageDescription">{s.description}</p>
      </main>
    )
  }
}
export default Illustrations
