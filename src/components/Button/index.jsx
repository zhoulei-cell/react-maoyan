import React from "react"
import "./css/base.css"

const Button = (props) => {
  const { text, disabled, handleClick } = props
  return (
    <button className="btn reset-btn" disabled={disabled} onClick={handleClick}>{text}</button>
  )
}

Button.defaultProps = {
  disabled: false
}

export default Button