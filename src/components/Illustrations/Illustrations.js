import React, { Component } from 'react'
import Images from './Images'
import Illu from './Illu'
import './Illustrations.css'

class Illustrations extends Component {
  constructor(){
    super()
    this.handleImgClick = this.handleImgClick.bind(this)
    this.handleMDown = this.handleMDown.bind(this)
    this.handleMUp = this.handleMUp.bind(this)
    this.state = {
      description:Images[0].title,
      hasScroll: false,
      pos:50,
      elt: ()=> document.getElementById('illusList'),
      listWidth: ()=> this.state.elt().clientWidth,
      listLength:Images.length,
      showCompactStatusBar: false
    }
  }



  handleImgClick(e){
    if (this.state.hasScroll) {
      const s = this.state, p = s.pos;
      if (p < 50  || e.deltaY === 100) {
        this.setState({pos:s.pos + -e.deltaY})
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

  render(){
    let folder = 'img/'
    return (
      <main className="illus">
        <ul
          id="illusList"
          style={{transform:'translateX('+this.state.pos+'px)'}}
          onWheel={this.handleImgClick}
          onDragStart ={this.handleMDown}
          onDragEnd ={this.handleMUp}
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
        <p className="imageDescription">{this.state.description}</p>
      </main>
    )
  }
}
export default Illustrations
