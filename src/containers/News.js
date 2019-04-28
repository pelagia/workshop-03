import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { news } from '../newsData'

import { Content, Label } from '../components'

const ScrollableContent = styled(Content)`
  overflow: auto;
  padding: 30px;
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px;
`

const WrapperLink = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 10px;
`

const BaseInfo = styled.section`
  padding: 20px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
  background-color: #fff8dc;
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

class News extends Component {
  render () {
    return (
      <ScrollableContent>
        <LinkPage to='/'>
          <div>
            <img
              src={require('./assets/back.png')}
              alt=''
              height='20px'
              width='20px'
            />
          </div>
        </LinkPage>
        <BaseInfo>
          {Object.values(news).map(item => (
            <Card>
              <Wrapper>
                <LabelText>{item.title}</LabelText>
              </Wrapper>
              <Wrapper>
                <LabelText>{item.summary}</LabelText>
              </Wrapper>
              <WrapperLink>
                <LabelText>useful info:</LabelText>
                <LabelText>{item.link}</LabelText>
              </WrapperLink>
              <WrapperLink>
                <LabelText>more:</LabelText>
                <ReactPlayer url={item.video} />
              </WrapperLink>
            </Card>
          ))}
        </BaseInfo>
      </ScrollableContent>
    )
  }
}

export default News
