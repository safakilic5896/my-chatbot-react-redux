import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class CustomRoute extends Component {
  constructor() {
    super();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const isSignedIn = localStorage.getItem("user") || false;
    return (
      <Route
        {...rest}
        render={(props) =>
          isSignedIn ? <Redirect to="/" /> : <Component {...props} />
        }
      ></Route>
    );
  }
}
