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
  display: flex;
  padding: 10px;
  margin-top: 30px;
`

const BaseInfo = styled.section`
  padding: 20px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 5px 10px rgb(74, 157, 134);
  background-color: rgba(217, 130, 59, 0.95);
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
  font-weight: ${props => props.bold ? `bold`: `normal`};
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
                <LabelText bold>{item.title}</LabelText>
              </Wrapper>
              <Wrapper>
                <LabelText>{item.summary}</LabelText>
              </Wrapper>
              <WrapperLink>
                <LabelText bold>useful info:</LabelText>
                <LabelText>{item.link}</LabelText>
              </WrapperLink>
              <WrapperLink>
                <LabelText bold>more:</LabelText>
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
