import React from "react"

import MovieCard from "@components/MovieCard"

const SearchMovieListItem = (props) => {
  const { item } = props
  return (
    <MovieCard title={item.nm} imgSrc={item.img.replace(/w.h/, "128.180")}>
      <p className="line-ellipsis">
      <span>{item.cat} | {item.fra}</span>
      </p>
      <p className="line-ellipsis">主演: {item.star}</p>
      <p className="line-ellipsis">{item.pubDesc}</p>
    </MovieCard>
  )
}

export default SearchMovieListItem