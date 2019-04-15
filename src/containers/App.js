import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import base, { firebaseApp } from '../base';
import { Content, Header, TextArea, Label, Input, Button } from '../components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 40%;
  width: 100%;
  padding: 5px;
`;

const BaseInfo = styled.section`
  padding: 20px;
`;

class App extends Component {
  constructor() {
    super();
    this.database = firebaseApp
      .database()
      .ref()
      .child('firstName');
  }

  state = {
    firstName: '',
    lastName: '',
    personalInfo: '',
    favoriteMovie: ''
  };

  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        firstName: snap.val()
      });
    });
  }

  writeUserData(name, lastName) {
    firebaseApp.database().ref();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postData = () => {
    this.writeUserData(this.state.name, this.state.lastName);
    firebaseApp
      .database()
      .ref('info/important/personal')
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        personalInfo: this.state.personalInfo,
        favoriteMovie: this.state.favoriteMovie
      });
  };

  render() {
    return (
      <Content>
        <Header>My Personal Site</Header>
        <BaseInfo>
          <Wrapper>
            <Label>Name:</Label>
            <Input
              name="firstName"
              value={this.state.firstName}
              onChange={e => this.onChange(e)}
            />
          </Wrapper>
          <Wrapper>
            <Label>Last name:</Label>
            <Input
              name="lastName"
              value={this.state.lastName}
              onChange={e => this.onChange(e)}
            />
          </Wrapper>
          <Wrapper>
            <Label>Write some things for yourself</Label>
            <TextArea
              name="personalInfo"
              value={this.state.personalInfo}
              onChange={e => this.onChange(e)}
            />
          </Wrapper>
          <Wrapper>
            <Label>Favorite movie:</Label>
            <Input
              name="favoriteMovie"
              value={this.state.favoriteMovie}
              onChange={e => this.onChange(e)}
            />
            <ReactPlayer url={this.state.favoriteMovie} width="300px" />
          </Wrapper>
          <Button onClick={this.postData}>Submit Data</Button>
        </BaseInfo>
      </Content>
    );
  }
}

export default App;
