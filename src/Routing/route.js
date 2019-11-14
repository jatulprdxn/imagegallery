import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import React from "react";
import Home from "../Pages/home";
import Login from "../Pages/login";
import Layout from '../Pages/layout'
import  Header  from "../component/Header";

function Routes() {
  return (
    <Router>
      <div>
        <Route path="" component={Header} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/layout" component={Layout} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;