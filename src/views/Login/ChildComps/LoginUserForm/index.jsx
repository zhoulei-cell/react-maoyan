import React, { useState } from "react"
import Input from "@components/Input"
import Button from "@components/Button"
import "./index.css"

const LoginUserForm = () => {

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")

  const submit = (e) => {
    console.log(e)
  }
  return (
    <div className="user-form">
      <div className="input-box border">
        <Input placeholder="账户名/手机号/Email" value={user} onChange={setUser}/>
      </div>
      <div className="input-box">
        <Input placeholder="请输入您的密码" value={pwd} onChange={setPwd}/>
      </div>
      <div className="btn-box">
        <Button text="登录" handleClick={submit}/>
      </div>
    </div>
  )
}

export default LoginUserForm