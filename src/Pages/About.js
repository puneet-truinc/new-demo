import React, { Component } from 'react'
import Heading from '../Components/Heading/Heading'

export default class About extends Component {
  constructor(props){
    super(props);
        this.state = {
           first : 'My About Us Heading',
    }
  }
  render() {
    return (
        <div className='heading_source'>
          <Heading first={this.state.first}/>
        </div>
    )
  }
}
