import React, { Component } from 'react'
import Frontend from './Frontend'
import GetRepos from './GetRepos'
import './Frontend.css'

class Github extends Component {
  render(){
    return(
      <main>
        <Frontend/>
        <GetRepos/>
      </main>
    )
  }
}

export default Github
