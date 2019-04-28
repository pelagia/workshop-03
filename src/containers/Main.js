import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  width: 100vw;
  height: 100vh;
`

const Content1 = styled.div`
  display: flex;
  background-color: #74f5d5;
  justify-content: center;
  padding: 100px;
  font-family: Courier New;
  font-size: 24px;
  font-weight: bold;

  div:hover {
    cursor: pointer;
  }

  div {
    position: absolute;
    padding: 35px;
  }
`

const Content2 = styled.div`
  display: flex;
  background-color: #6ae1da;
  justify-content: center;
  padding: 50px;
`

const LinkPage = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;

  :hover {
    color: grey;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 150px;
  align-items: center;
`

class Main extends Component {
  constructor (props) {
    super(props)
    this.showMenu = this.showMenu.bind(this)
    this.state = {
      showMenu: false
    }
  }

  showMenu () {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render () {
    return (
      <Wrapper>
        <Content1>
          Pelagia
          <div onClick={this.showMenu}>
            <img
              src={require('./assets/menu.png')}
              alt=''
              height='30px'
              width='30px'
              onClick={this.showMenu}
            />
          </div>
          {this.state.showMenu && (
            <Menu>
              <LinkPage
                activeStyle={{
                  fontWeight: 'bold'
                }}
                exact
                to='/personal'
              >
                About me
              </LinkPage>
              <LinkPage
                activeStyle={{
                  fontWeight: 'bold'
                }}
                to='/activities'
              >
                Activities
              </LinkPage>
              <LinkPage
                activeStyle={{
                  fontWeight: 'bold'
                }}
                to='/news'
              >
                News
              </LinkPage>
            </Menu>
          )}
        </Content1>
        <Content2>
          <img
            src={require('./assets/abstract.jpg')}
            alt=''
            height='200px'
            width='200px'
          />
        </Content2>
      </Wrapper>
    )
  }
}

export default Main
