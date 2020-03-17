import React from "react"

import ComingSoonListCard from "../ComingSoonListCard"

function ComingSoonList(props) {
  const { comingSoonList } = props
  return (
    <ul className="coming-soon-list">
      {
        comingSoonList.map(item => (
          <ComingSoonListCard item={item} key={item.id}/>
        ))
      }
    </ul>
  )
}

export default ComingSoonList