import React, { useState } from "react"
import SearchHeader from "./ChildComps/SearchHeader"
import SearchInput from "./ChildComps/SearchInput"

const Search = () => {
  const [searchVal, setSearchVal] = useState("")

  const searchHandle = (e) => {
    setSearchVal(e.target.value)
  }

  return (
    <div className="movie-search">
      <SearchHeader />
      <SearchInput searchHandle={searchHandle} value={searchVal}/>
    </div>
  )
}

export default Search