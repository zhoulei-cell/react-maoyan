import React from "react"
import "./css/base.css"

function AlphabetIndex() {
  const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "p", "u", "v", "w", "x", "y", "z"]
  return (
    <div className="alphabet-index">
      <ul className="alphabet-index-list">
        {
          arr.map((item, index) => (
            <li className="alphabet-index-list-item" key={index}>{item.toUpperCase()}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default AlphabetIndex