import React, { Component} from 'react'
class MTD extends Component {

  componentDidMount(){
    document.getElementById('nav').classList.add('mtd')
  }
  componentWillUnmount(){
    document.getElementById('nav').classList.remove('mtd')
  }
  render(){
    return <main className="prototype"><iframe title="mtd" src="/comps/mtd/"></iframe></main>
  }
}
export default MTD
