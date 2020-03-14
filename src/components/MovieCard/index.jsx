import React from "react"
import classNames from "classnames"

import "./css/base.css"

import image from "./images/3d.png"

function MovieCard(props) {
  let btnClassName = classNames(["btn",{orange: props.mall === "购票"}, {blue: props.mall === "预购"}])
  return (
    <li className="movie-card">
      <div className="movie-card-pic">
        <img src={props.imgSrc} />
      </div>
      <div className="movie-card-info">
        <h5 className="movie-card-info-title">

          <span className="title-text">{props.title}</span>
          <img className="title-icon" src={image} />
        </h5>
        {props.children}
      </div>
      <div className="movie-card-mall">
        <span className={btnClassName}>{props.mall}</span>
      </div>
    </li>
  )
}

export default MovieCard