import React, { useState, useEffect } from "react";
import CreateServer from "./CreateServer";
import Home from "./Home";
import Login from "./Login/Sign-up/Login";
import "./App.css"

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
