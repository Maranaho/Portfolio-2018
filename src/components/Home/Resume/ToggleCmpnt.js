import React, { Component } from "react";
class ToggleCmpnt extends Component {
  render(){

    const
    p = this.props,
    styles = {
      togl:{
        transform: 'translateX('+p.moveTgl+'px)',
        width: p.tglWidth+'px'
      }
    };
    return <article
    id="toggleCmpnt"
    onClick={p.toggle}
    className={p.active ? 'active' : ''}>
      <button
      className={p.active ? 'active xtra uppercase' : 'xtra uppercase'}
      id="pro">Experience</button>
      <button
      className={!p.active ? 'active xtra uppercase' : 'xtra uppercase'}
      id="educ">Education</button>
      <u
      style={styles.togl}
      id="toggleSlide">toggleSlide</u>
    </article>
  }
}

export default ToggleCmpnt;
