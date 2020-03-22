import React, { useState, useEffect } from "react"
import LoginHeader from "./ChildComps/LoginHeader"
import LoginSwitch from "./ChildComps/LoginSwitch"
import LoginUserForm from "./ChildComps/LoginUserForm"
import LoginVerifyForm from "./ChildComps/LoginVerifyForm"
import "./index.css"

const config = ["user", "verify"]

const Login = () => {

  const [mode, setMode] = useState(config[0])
  const switchMode = (index) => {
    setMode(config[index])
  }

  useEffect(() => {
    console.log(mode)
  } ,[mode])

  return (
    <div className="main">
      <LoginHeader/>
      <LoginSwitch mode={mode} switchMode={switchMode}/>
      {
        mode === "user" ? (
          <LoginUserForm/>
        ) : (
          <LoginVerifyForm/>
        )
      }
    </div>
  )
}

export default Login