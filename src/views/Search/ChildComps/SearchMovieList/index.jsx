import React from "react"

import SearchMovieListItem from "../SearchMovieListItem"
import SearchMovieListTmp from "../SearchMovieListTmp"
import "./index.css"

function SearchMovieList(props) {
  const { data, value } = props
  return (
    <div className="search-list-wrap">
      {
        data.movies ? (
          <ul className="search-list">
            {
              data.movies.list.map((item, index) => (
                <SearchMovieListItem item={item} key={index}/>
              ))
            }
        </ul>) : null
      }
      {
        (value === "" || JSON.stringify(data) === "{}") ? <SearchMovieListTmp value={value}/> : null
      }
    </div>
  )
}

export default SearchMovieList
