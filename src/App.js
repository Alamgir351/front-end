import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./App.css"
import Login from "./components/Login"
import PrivateRoute from "./utilities/privateRoute"
import Registration from "./components/Registration"
import ProtectedContent from "./components/ProtectedContent"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/protected" component={ProtectedContent} />
      </div>
    </Router>
  )
}

export default App
