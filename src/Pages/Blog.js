import React, {  Fragment } from 'react'
import Container from '../Components/Container/Container';

function Blog() {
  return (
    <Fragment>
        <Container />
        <div className='wi_full'>
          <h1>My Files</h1>
          <p text='Learn React App' />
          <div className='actions'>
              <button className='btn'>Delete</button>
          </div>
        </div>
    </Fragment>
  )
}

export default Blog;
