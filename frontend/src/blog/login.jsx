import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Auth from "./authenticate";
import authenticate from "./authenticate";
export const Login = (props) => {
  const history = useHistory();

  function redirect() {
    history.push("/admin");
  }
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          authenticate.login(() => {
            redirect();
          });
        }}
      >
        login
      </button>
    </div>
  );
};
