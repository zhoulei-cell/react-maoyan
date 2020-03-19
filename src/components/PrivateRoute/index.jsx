import React from "react"
import { Route, Redirect } from "react-router-dom"
const isLogin = false

const PrivateRoute = ({component: Component, ...reset}) => {
  return (
    <Route {...reset} render={
      props => {
        return isLogin ? <Component {...props}/> : <Redirect to="/mine"/>
      }
    } />
  )
}

export default PrivateRoute