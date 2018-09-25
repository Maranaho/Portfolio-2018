import React, { Component } from 'react'
import Images from './Images'
import Illu from './Illu'
import './Illustrations.css'

class Illustrations extends Component {
  constructor(){
    super()
    this.handleImgClick = this.handleImgClick.bind(this)
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

  render(){
    let folder = 'img/'
    return (
      <main className="illus">
        <ul
          id="illusList"
          style={{transform:'translateX('+this.state.pos+'px)'}}
          onWheel={this.handleImgClick}
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
