/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Tasks = ({title, description, deletetask, index}) => {
    
  return (
    <div className='task'>
        <div>
        <span>{title}</span>
        <p>{description}</p>
        </div>
    <button onClick= {() => deletetask(index)}>Remove</button>
    </div>
  )
}

export default Tasks
