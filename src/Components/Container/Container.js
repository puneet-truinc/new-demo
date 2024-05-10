import React from 'react'
import '../Container/Container.css'
import { Fragment } from 'react'

const Container = (props) => {
  return (
    <Fragment>
      <div className='{props.value}'>
        {props.children }
      </div>
    </Fragment>
  )
}

export default Container


