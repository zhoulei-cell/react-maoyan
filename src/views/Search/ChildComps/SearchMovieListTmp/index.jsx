import React from "react"

import "./index.css"
import noCinema from "@assets/image/no-cinema.png"

const SearchMovieListTmp = (props) => {
  const { value } = props
  return (
    <div className="list-tmp">
      {
        value === "" ? <div className="alert">输入影院关键字搜索电影</div> : (
          <div className="no-result">
            <img className="no-result-img" src={noCinema}/>
            <p className="no-result-info">没有找到相关影院</p>
          </div>
        )
      }
    </div>
  )
}

export default SearchMovieListTmp
