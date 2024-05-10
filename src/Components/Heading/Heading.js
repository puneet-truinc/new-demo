import React, { Component } from 'react'
import Container from '../Container/Container'

export default class Heading extends Component {
  render() {
    return (
      <div>
      <Container>
        <h1>{this.props.first} {this.props.second}</h1>
        </Container>
      </div>
    )
  }
}
