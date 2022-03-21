import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Pages/Login';
import './Assets/css/app.css'
const App = () => {
  return (
    <BrowserRouter>
      <Switch className="Container">
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
