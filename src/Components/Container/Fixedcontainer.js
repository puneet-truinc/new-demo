import React from 'react'
import '../Container/Container.css'
import { Fragment } from 'react'

const FixedContainer = (props) => {
  return (
    <Fragment>
      <div className='fixedcontainer'>
        {props.children }
      </div>
    </Fragment>
  )
}

export default FixedContainer


