import React from "react"
import classNames from "classnames"
import "./index.css"

const LoginSwitch = (props) => {
  
  const { mode, switchMode } = props
  const switchLogin = (index) => {
    switchMode(index)
  }

  return (
    <div className="switch-login-mode">
      <ul className="tab-list">
        <li className="tab-item" onClick={(e) => switchLogin(0, e)}>
          <span>美团账号登录</span>
        </li>
        <li className="tab-item" onClick={(e) => switchLogin(1, e)}>
          <span>手机验证登录</span>
        </li>
        <li className={classNames(["slide", {active: mode === "verify"}])}></li>
      </ul>
    </div>
  )
}

export default LoginSwitch