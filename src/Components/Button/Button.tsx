import React from 'react'

import "./Button.scss"

const Button = ({isDisabled}:any) => {
  return (
    <button type="submit" disabled={isDisabled}>CHECK CONTRAST</button>
  )
}

export default Button