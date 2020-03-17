import React from "react"
import "./css/base.css"

function AlphabetIndex(props) {
  const { alphabet } = props
  return (
    <div className="alphabet-index">
      <ul className="alphabet-index-list">
        {
          alphabet.map(item => (
            <li className="alphabet-index-list-item" key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default AlphabetIndex