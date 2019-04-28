import React, { Component } from 'react'
import styled from 'styled-components'
import {
  NavLink
} from 'react-router-dom'
import { firebaseApp } from '../base'

import { Content, TextArea, Input, Label, Button } from '../components'

const ScrollableContent = styled(Content)`
  overflow: auto;
  padding: 30px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 40%;
  width: 100%;
  padding: 10px;
`

const BaseInfo = styled.section`
  padding: 20px;
`

const Card = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 5px 10px rgb(74, 157, 134);
  background-color: rgb(234, 196, 69);
  margin: 20px;
`

const LinkPage = styled(NavLink)`
  text-decoration: none;
  padding: 5px;

  :hover {
    color: grey;
  }
`

const LabelText = styled(Label)`
  color: black;
`

class Activities extends Component {
  constructor (props) {
    super(props)
    this.databaseData = firebaseApp
      .database()
      .ref()
      .child('activities')
  }

state = {
  addActivity: false,
  name: '',
  location: '',
  info: '',
  databaseData: {}
}

componentDidMount () {
  this.databaseData.on('value', snap => {
    this.setState({ databaseData: snap.val() })
  })
}

addActivity = () => {
  this.setState({ addActivity: !this.state.addActivity })
}

onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

onSubmitData = () => {
  firebaseApp
    .database()
    .ref(`activities/${this.state.name}`)
    .set({
      activityName: this.state.name,
      location: this.state.location,
      info: this.state.info
    })
  this.setState({ addActivity: false })

  this.databaseData.on('value', snap => {
    this.setState({ databaseData: snap.val(), name: '', location: '', info: '' })
  })
}

render () {
  return (
    <ScrollableContent>
      <LinkPage to='/'>
        <div>
          <img src={require('./assets/back.png')} alt='' height='20px' width='20px' />
        </div>
      </LinkPage>
      <BaseInfo>
        <Button onClick={this.addActivity} >Add Activity</Button>
        {this.state.databaseData !== null && Object.values(this.state.databaseData).map(item =>
          <Card key='item'>
            <Wrapper>
              <LabelText>What type of activity?</LabelText>
              <LabelText>{item.activityName}</LabelText>
            </Wrapper>
            <Wrapper>
              <LabelText>location</LabelText>
              <LabelText>{item.location}</LabelText>
            </Wrapper>
            <Wrapper>
              <LabelText>useful info</LabelText>
              <LabelText>{item.info}</LabelText>
            </Wrapper>
          </Card>)}
        {this.state.addActivity && <div>
          <Card>
            <Wrapper>
              <LabelText>What type of activity?</LabelText>
              <Input name='name' value={this.state.name} onChange={this.onChange} />
            </Wrapper>
            <Wrapper>
              <LabelText>location</LabelText>
              <Input name='location' value={this.state.location} onChange={this.onChange} />
            </Wrapper>
            <Wrapper>
              <LabelText>useful info</LabelText>
              <TextArea name='info' value={this.state.info} onChange={this.onChange} />
            </Wrapper>
          </Card>
          <Button onClick={this.onSubmitData}>save</Button>
        </div>}
      </BaseInfo>
    </ScrollableContent>
  )
}
}

export default Activities
