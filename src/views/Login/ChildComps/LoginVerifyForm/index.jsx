import React, { useState } from "react"
import Input from "@components/Input"
import Button from "@components/Button"
import "./index.css"

const LoginVerifyForm = () => {

  const [phone, setPhone] = useState("")
  const [verifyCode, setVerifyCode] = useState("")

  const submit = () => {
    console.log("提交")
  }
  return (
    <div className="verify-form">
      <div className="input-box phone-box">
        <div className="phone">
          <Input placeholder="请输入手机号" value={phone} onChange={setPhone}/>
        </div>
        <div className="verify">
          <Button text="获取验证码" disabled={true} handleClick={submit}/>
        </div>
      </div>
      <div className="input-box">
        <Input placeholder="请输入短信验证码" value={verifyCode} onChange={setVerifyCode} disabled={true}/>
      </div>
      <div className="btn-box">
        <Button text="登录" disabled={true} handleClick={submit}/>
      </div>
    </div>
  )
}

export default LoginVerifyForm