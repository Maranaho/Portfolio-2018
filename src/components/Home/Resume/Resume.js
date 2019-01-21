import React,{ Component } from 'react'
import ResumeProList from './ResumeProList'
import ResumeEducationList from './ResumeEducationList'
import ResumeData from './ResumeData'
import ToggleCmpnt from './ToggleCmpnt'
import ResumeNxtPrv from './ResumeNxtPrv'
import './Resume.css'




class Resume extends Component {

  constructor(props){
    super(props)
    this.state = {
      pro:true,
      resizeTimer: null,
      proCounter:0,
      educCounter:0,
      proWidth: ResumeData[0].length * 370,
      educWidth: ResumeData[1].length * 370,
      first: true,
      last: false,
      moveTgl: 5,
      tglWidth: 214
    }

    this.optinScroll = this.optinScroll.bind(this)
    this.toggleEducation = this.toggleEducation.bind(this)
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.handleNxtPrvClick = this.handleNxtPrvClick.bind(this)
    this.moveActive = this.moveActive.bind(this)
    this.handleMouseWheel = this.handleMouseWheel.bind(this)
  }

  toggleEducation(e){
      const pro = e.target.id === 'pro';
      if ((pro && !this.state.pro) || (!pro && this.state.pro)) {
          this.setState({
            pro: !this.state.pro,
            first: true,
            last: false,
            proCounter:0,
            educCounter:0
          })

      }
  }

  moveActive(e){
    let offset;
    if (this.state.pro) {
      offset = e.target.offsetLeft -2
    } else {
      offset = e.target.offsetLeft +2
    }
    this.setState({
      tglWidth: e.target.clientWidth,
      moveTgl: offset
    })
  }

  optinScroll(e) {
    clearTimeout(this.state.resizeTimer)
    this.setState({resizeTimer: setTimeout(this.handleMouseWheel(e), 100)})
  }

handleMouseWheel(e){
  if (window.innerWidth >= 1570) {
    e.preventDefault()
    this.setUpNxt(e.deltaY > 0)
  }
}

  handleNxtPrvClick(e){
    const nxt = e.target.id === 'nxt';
    this.setUpNxt(nxt)
  }


  setUpNxt(nxt){
    if (nxt) {
        if (this.state.pro) {
            if (this.state.proCounter < 1) {
                this.setState({
                  proCounter: this.state.proCounter+1,
                  first: false,
                  last: true
                })
            }
        } else {
            if (this.state.educCounter < 2) {
                this.setState({
                  educCounter: this.state.educCounter+1
                })
            }
            if (this.state.educCounter === 1) {
                this.setState({last: true})
            }
        }
    } else {
        if (this.state.pro) {
          if (this.state.proCounter > 0) {
            this.setState({
              proCounter: this.state.proCounter-1
            })
          }
        } else {
          if (this.state.educCounter > 0) {
            this.setState({
              educCounter: this.state.educCounter-1,
              last: false
            })
          }
          if (this.state.educCounter === 1) {
            this.setState({first: true})
          }
        }
    }
  }

  handleToggleClick(e){
    this.toggleEducation(e)
    this.moveActive(e)
  }

  render(){
    return (
      <main id="resume">
       <section><h2 className="xtra uppercase">Résumé</h2></section>

       <section id="resumeActions">
          <ToggleCmpnt
          tglWidth={this.state.tglWidth}
          moveTgl={this.state.moveTgl}
          toggle={this.handleToggleClick}
          active={this.state.pro} />
          <ResumeNxtPrv
          nxtPrv={this.handleNxtPrvClick}
          active={this.state.pro}
          first={this.state.first}
          last={this.state.last}/>
          <span className="upe" onClick={this.props.scrollTo} idx="2">Back up to the synths &#8593;</span>
       </section>

       <section
       className={this.state.pro ? 'pro' : 'educ'}
       onWheel={this.optinScroll}
       id="resumeListCtn">

         {window.innerWidth <= 1570 && <h3 className="mobTitle thin">Experience</h3>}
         <ResumeProList
         incr={this.state.proCounter}
         data={ResumeData[0]}
         width={this.state.proWidth}
         toggle={this.handleToggleClick}/>

         {window.innerWidth <= 1570 && <h3 className="mobTitle thin">Education</h3>}
         <ResumeEducationList
         incr={this.state.educCounter}
         data={ResumeData[1]}
         width={this.state.educWidth}
         toggle={this.handleToggleClick}/>
        </section>
      </main>
    )
  }
}

export default Resume;
