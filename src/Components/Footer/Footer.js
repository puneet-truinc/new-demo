import React, { Component } from 'react'
import './footer.css'
import Cards from '../Cards/Cards'
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Title1: 'Hello 10',
        value1: 'Welcome'
    }
}
  render() {
    return (
      <div className='footer_part'>
         <p>React App || Copyright 2024 || All Rights Reserved.</p>
         <Cards cardTitle1={this.state.Title1} cardValue1={this.state.value1} />
      </div>
    )
  }
}
