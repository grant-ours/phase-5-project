import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

function Login({ setUser }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="login_signup">
      <p className="center_pad">Welcome to Discode!</p>
      {isVisible ? (
        <LoginForm setUser={setUser} setIsVisible={setIsVisible} />
      ) : (
        <SignUp setUser={setUser} setIsVisible={setIsVisible} />
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Login;
