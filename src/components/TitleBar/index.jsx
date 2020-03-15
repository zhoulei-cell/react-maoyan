import React from "react"
import "./css/base.css"

function TitleBar(props) {
  return (
    <div className="title-bar">
      {
        props.leftIcon || props.leftText ? (
          <div className="title-bar-left" onClick={props.leftHandle}>
            {props.leftIcon ? <i className={`iconfont ${props.leftIcon}`}></i> : null}
            {props.leftText ? <span className="left-text">{props.leftText}</span> : null}
          </div>) : null
      }
      
      {
        props.rightIcon || props.rightText ? (
          <div className="title-bar-right" onClick={props.rightHandle}>
            {props.rightText ? <span className="right-text">{props.rightText}</span> : null}
            {props.rightIcon ? <i className={`iconfont ${props.rightIcon}`}></i> : null}
          </div>
        ) : null
      }

      <div className="title-bar-center">
        {props.children}
      </div>
      
    </div>
  )
}

export default TitleBar