import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

function Login({ setUser }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {isVisible ? (
        <LoginForm setUser={setUser} setIsVisible={setIsVisible} />
      ) : (
        <SignUp setUser={setUser} setIsVisible={setIsVisible} />
      )}
    </div>
  );
}

export default Login;
