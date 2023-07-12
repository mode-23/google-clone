import React from 'react'
import {GiLaserWarning} from 'react-icons/gi'
const Error = () => {
  return (
    <div className='errorPage'>
     <div className="container">
     <GiLaserWarning />
     <h1>Page not found</h1>
     </div>
     </div>
  )
}

export default Error