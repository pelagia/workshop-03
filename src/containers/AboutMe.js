import React, { Component } from 'react'
import styled from 'styled-components'
import {
  NavLink
} from 'react-router-dom'
import { firebaseApp } from '../base'
import { Content } from '../components'

const BaseContent = styled(Content)`
  display: flex;
  flex-direction: column;
`

const LinkPage = styled(NavLink)`
  text-decoration: none;
  padding: 5px;

  :hover {
    color: grey;
  }
`

const MainTitle = styled.div`
    font-family: Courier New
    font-size: 18px;
`

const Paragraph = styled.p`
    font-size: 16px;
`

const Wrapper = styled.div`
  padding: 30px;
`

class AboutMe extends Component {
  constructor () {
    super()
    this.dataFirstName = firebaseApp
      .database()
      .ref()
      .child('firstName')

    this.dataUserDescription = firebaseApp
      .database()
      .ref()
      .child('baseDescription')
  }

  state = {
    firstName: '',
    lastName: '',
    personalInfo: '',
    favoriteMovie: '',
    baseDescription: ''
  };

  componentDidMount () {
    this.dataFirstName.on('value', snap => {
      this.setState({
        firstName: snap.val()
      })
    })
    this.dataUserDescription.on('value', snap => {
      this.setState({
        baseDescription: snap.val()
      })
    })
  }

  writeUserData (name, lastName) {
    firebaseApp.database().ref()
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  postData = () => {
    this.writeUserData(this.state.name, this.state.lastName)
    firebaseApp
      .database()
      .ref('info/important/personal')
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        personalInfo: this.state.personalInfo,
        favoriteMovie: this.state.favoriteMovie
      })
  };

  render () {
    return (
      <BaseContent>
        <LinkPage to='/'>
          <div>
            <img src={require('./assets/back.png')} alt='' height='20px' width='20px' />
          </div>
        </LinkPage>
        <Wrapper>
          <MainTitle>My name is {this.state.firstName}, and this is my story..</MainTitle>
          <Paragraph>{this.state.baseDescription}</Paragraph>
          <img src={require('./assets/nature.jpeg')} alt='' height='400px' width='600px' />
        </Wrapper>
      </BaseContent>
    )
  }
}

export default AboutMe
