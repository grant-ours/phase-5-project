import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login/Sign-up/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(undefined);
  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetch("/api/servers").then((response) => {
      if (response.ok) {
        response.json().then((servers) => setServers(servers));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <Home user={user} setUser={setUser} servers={servers} setServers={setServers}/>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
