import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/about" component={App} />
      <Route exact path="/projects" component={App} />
      <Route exact path="/projects/LamecoDashboard" component={App} />
      <Route exact path="/projects/resume" component={App} />
      <Route exact path="/projects/time" component={App} />
      <Route exact path="/skills" component={App} />
      <Route exact path="/contact" component={App} />
      <Route exact path="/terms" component={App} />
      <Route exact path="/credits" component={App} />
      <Route exact path="/" component={App} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
