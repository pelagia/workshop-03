import React, { Component } from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import AboutMe from './AboutMe'
import Main from './Main'
import Activities from './Activities'
import News from './News'

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.9;
  margin: 0;
`

class Navigator extends Component {
  render () {
    return (
      <Router>
        <Root>
          <div>
            <Route exact path='/' component={Main} />
            <Route exact path='/personal' component={AboutMe} />
            <Route exact path='/activities' component={Activities} />
            <Route exact path='/news' component={News} />
            {this.props.children}
          </div>
        </Root>
      </Router>
    )
  }
}

export default Navigator
