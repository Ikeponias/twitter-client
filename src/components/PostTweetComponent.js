import React, { Component } from 'react'
import { Container, Content, Input, Form, Button, Text } from 'native-base'
import styled from 'styled-components'

const TweetInput = styled(Input)`
  border-width: 1px;
  background: #ffffff;
  min-height: 40px;
  margin: 5px;
`

export default class PostTweetContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.value !== nextState.value) {
      return false
    }

    return true
  }

  render () {
    const { onPress } = this.props
    const { text } = this.state
    return (
      <Container>
        <Content padder>
          <Form>
            <TweetInput
              multiline={true}
              numberOfLines={4}
              placeholder="ツイートを書く"
              placeholderTextColor="#C7C7CD"
              onChangeText={text => this.setState({ text })}
            />
            <Button block onPress={onPress.bind(this, text)}>
              <Text>ツイート！</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
