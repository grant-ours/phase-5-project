import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function LoginForm({ setUser, setIsVisible }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e) {
    setIsVisible(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
  return (
    <div className="container">
      <h1 className="bigger">Login!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Field>
        <Form.Field>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </Form.Field>
        <Button primary type="submit">Login</Button>
      </Form>
      <Button secondary onClick={handleClick}>Dont have an account? Sign up!</Button>
    </div>
  );
}

export default LoginForm;
