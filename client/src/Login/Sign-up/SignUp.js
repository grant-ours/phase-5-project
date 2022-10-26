import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function SignUp({ setUser, setIsVisible }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleClick(e) {
    setIsVisible(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    setIsVisible(true);
  }

  return (
    <div className="container">
      <h1 className="bigger">Sign Up!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Field>
        <Form.Field>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </Form.Field>
        <Form.Field>
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        </Form.Field>
        <Button primary className="big_button" type="submit">Submit</Button>
      </Form>
      <Button secondary onClick={handleClick}>Have an account already? Login!</Button>
    </div>
  );
}

export default SignUp;
