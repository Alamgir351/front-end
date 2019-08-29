import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./utilities/privateRoute";
import Registration from "./components/Registration";
import StudentList from "./components/StudentList";
import ShowReminders from "./components/ShowReminders";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/registration" component={Registration} />
        <Route path="/reminders" component={ShowReminders} />
        <PrivateRoute path="/protected" component={StudentList} />
      </div>
    </Router>
  );
}

export default App;
