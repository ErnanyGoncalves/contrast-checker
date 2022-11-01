import React from 'react'

import "./Message.scss"

const Message = ({msg}:any) => {
  return (
    <div className='msg'>
      <p>{msg}</p>       
    </div>
  )
}

export default Message