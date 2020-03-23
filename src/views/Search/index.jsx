import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { searchFilms } from "@network/api/film"
import debounce from "@utils/debounce"
import throttle from "@utils/throttle"
import SearchHeader from "./ChildComps/SearchHeader"
import SearchInput from "./ChildComps/SearchInput"
import SearchMovieList from "./ChildComps/SearchMovieList"
import "./index.css"

const Search = () => {
  const city = useSelector(state => state.city)
  const [searchVal, setSearchVal] = useState("")
  const [searchData, setSearchData] = useState({})

  const searchHandle = (e) => {
    setSearchVal(e.target.value)
  }

  const searchRequest = throttle(function () {
    searchFilms(city.cityId, searchVal).then(res => {
      const data = res.data.data
      setSearchData(data)
    })
  }, 50)

  useEffect(() => {
    if (searchVal) {
      searchRequest()
    } else {
      setSearchData({})
    }
  }, [searchVal])

  return (
    <div className="movie-search">
      <SearchHeader />
      <SearchInput searchHandle={searchHandle} value={searchVal}/>
      <SearchMovieList data={searchData} value={searchVal}/>
    </div>
  )
}

export default Search