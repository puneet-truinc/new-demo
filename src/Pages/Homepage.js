import React, { Component, Fragment } from 'react'
import Cards from '../Components/Cards/Cards'
import home from '../home.json'
import Container from '../Components/Container/Container'

export default class Homepage extends Component {
  render() {
    return (
      <Fragment>
      <Container />
            <div className='d-flex card-wrapper'>
            {home.cards.map((i, j) =>
              <Cards key={j} values={i} />
            )}
            </div>
      </Fragment>
    )
  }
}
