import React, { Component } from 'react'

const color={
  fontSize:'18px',
  color:'blue'
}

export default class Class extends Component {
  render() {
    return (
      <div className='class-name hide-class-name'>
        <h2>This is created using Class Component</h2>
       <p className='para1'>This is done using external css</p>
       <p style={color}>This is done using internal css</p>
      </div>
    )
  }
}

