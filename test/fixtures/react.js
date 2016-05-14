/* eslint import/no-extraneous-dependencies: "off" */
/* eslint import/no-unresolved: "off" */

import React from 'react'

// prefer stateless functions
const Greeting = props => {
  return ( // wrapping multiline JSX in parentheses
    <div>Hello, {props.name}</div> // no curly space
  )
}

export default Greeting
