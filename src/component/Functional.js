import React from 'react'

const color={
  fontSize:'18px',
  color:'blue'

}

const Functional = () => {
  return (
    <div className='functional'>
       <h2>This is created using functional component</h2>
       <p className='para1'>This is done using external css</p>
       <p style={color}>This is done using internal css</p>

    </div>
  )
}

export default Functional