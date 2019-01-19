import React,{ Component } from 'react';

class ResumeEducationList extends Component {

    render(){
      const p = this.props;

      let width;
      if (window.innerWidth >= 1570) {
        width = p.width + 'px'
      } else {
        width = 'auto'
      }
      let
      styles = {
        width: width,
        transform: 'translateX(-'+ p.incr * 370 + 'px)'
      };

      return <ul
      id="education"
      className="skillList"
      style={styles}>
      {p.data.map((i,idx)=>
      <li key={idx}>
        <h3 className="xtra">{i.year}</h3>
        <h4
        className="thin uppercase"
        dangerouslySetInnerHTML = {{ __html :  i.title }} />
        <h5>
            <span className="xtra">{i.length}</span>
            <small>{i.unit}</small>
        </h5>
        <h6
        className="bold"
        dangerouslySetInnerHTML = {{ __html :  i.des }} />
        <p dangerouslySetInnerHTML = {{ __html :  i.txt }} />
      </li>)}
    </ul>
  }
}

export default ResumeEducationList;
