import React from 'react'
import './login.css'
import { useContext, useRef } from "react";
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

/*  function Lo() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  }; */
function Login() {
    return (
        <div class="login">
           
            <div class="acces">
    <form class="loginBox" >
    <h1>Iniciar Sesion</h1>
      <input
        placeholder="Email"
        type="email"
        required
        class="email"
        // ref={email}
      />
      <input
        placeholder="Password"
        type="password"
        required
        minLength="6"
        class="password"
        // ref={password}
      />
      <button type="button" class="btn btn-success">Success</button>
      <span className="loginForgot">Forgot Password?</span>
      <button className="loginRegisterButton">
        {/* {isFetching ? (
          <CircularProgress color="white" size="20px" />
        ) : (
          "Create a New Account"
        )} */}
      </button>
    </form>
  </div>
        </div>
    )
};

export default Login;
