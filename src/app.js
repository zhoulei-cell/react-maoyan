import React from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import Loading from "./components/Loading"

import store from "./store"
import { routes } from "./routes"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {
            routes.map(item => (
              <Route {...item} key={item.path}/>
            ))
          }
          <Redirect to="/movie"/>
        </Switch>
      </Router>
      <Loading />
    </Provider>
  )
}

export default App