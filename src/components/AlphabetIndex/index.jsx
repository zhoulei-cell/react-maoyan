import React from "react"
import classNames from "classnames"
import "./css/base.css"

function AlphabetIndex(props) {
  const { alphabet, setIndex, activeIndex } = props
  return (
    <div className="alphabet-index">
      <ul className="alphabet-index-list">
        {
          alphabet.map((item, index) => (
            <li className={classNames(["alphabet-index-list-item", {active: index === activeIndex}])} key={item} onClick={(e) => setIndex(index, e)}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default AlphabetIndex