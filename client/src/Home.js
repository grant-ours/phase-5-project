import React from "react";
import NavBar from "./NavBar";
import CreateServer from "./CreateServer";
import { Route, Router } from "react-router-dom";

function Home({ user, setUser }) {
  return (
    <div>
      <NavBar logout={setUser} />
      <div className="body">
        Home Page
      </div>
    </div>
  );
}

export default Home;
