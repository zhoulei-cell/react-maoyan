import React from "react"
import "./css/base.css"

const Input = (props) => {
  const { placeholder, disabled, value, onChange } = props
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <input type="text" className="text-input" placeholder={placeholder} disabled={disabled} onChange={handleChange} value={value}/>
  )
}

Input.defaultProps = {
  disabled: false
}

export default Input