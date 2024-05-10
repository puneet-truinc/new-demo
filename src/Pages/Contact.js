import React, { Component } from 'react'
import Heading from '../Components/Heading/Heading'

export default class Contact extends Component {
  constructor(props) {
    super(props);
     this.state = {
        second : 'This is Contact Page',
     }           
  }
  render() {
    return (
        <div className='heading_source'>
          <Heading second={this.state.second}/>
        </div>
    )
  }
}
