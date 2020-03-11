import React from "react"
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

import Movie from "./views/Movie"
import Cinema from "./views/Cinema"
import Mine from "./views/Mine"
import City from "./views/City"
import Search from "./views/Search"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/movie" component={Movie} />
          <Route path="/cinema" component={Cinema} />
          <Route path="/mine" component={Mine} />
          <Route path="/city" component={City} />
          <Route path="/search" component={Search} />
          <Redirect to="/movie" />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App