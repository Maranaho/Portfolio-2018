import React, { Component } from 'react'
import Frontend from './Frontend'
import GetRepos from './GetRepos'

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
