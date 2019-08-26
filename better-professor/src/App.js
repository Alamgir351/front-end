import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css"
import Login from "./components/Login"
// import PrivateRoute from "./utilities/PrivateRoute"
import Registration from './components/Registration'

function App() {
  return (
    <Router>
    <div className="App">
      <header>
      <Link to="/registration">Sign up</Link>
      </header>
      
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route path="/registration" component={Registration} />
      {/* <PrivateRoute path="/protected" component={SOMETHING} /> */}
    </div>
    </Router>
  )
}

export default App
