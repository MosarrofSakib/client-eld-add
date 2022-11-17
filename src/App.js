import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Legal from "./Pages/Legal/Legal";
import LegalDetails from "./Pages/LegalDetails/LegalDetails";
import "./Assets/css/app.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch className="Container">
        <Route path="/" exact component={Login} />
        <Route path="/legal" exact component={Legal} />
        <Route path="/legal/:title" component={LegalDetails} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
