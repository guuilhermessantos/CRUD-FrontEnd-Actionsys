import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Update from "./Pages/Update"
import View from "./Pages/View"


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/update" exact component={Update} />
        <Route path="/view" exact component={View} />


      </Switch>
    </BrowserRouter>
  );
}