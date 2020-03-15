import React, { useState } from "react"

import SearchHeader from "./ChildComps/SearchHeader"
import SearchInput from "./ChildComps/SearchInput"

function Search() {
  let [searchVal, setSearchVal] = useState("")
  function searchHandle(e) {
    setSearchVal(e.target.value)
    console.log(searchVal)
  }
  return (
    <div className="movie-search">
      <SearchHeader />
      <SearchInput searchHandle={searchHandle} value={searchVal}/>
    </div>
  )
}

export default Search