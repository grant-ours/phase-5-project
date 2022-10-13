import React from "react";
import NavBar from "./NavBar";
import CreateServer from "./CreateServer";
import { Route, Router } from "react-router-dom";

function Home({ user, setUser }) {
  return (
    <div>
      Home Page
      <NavBar logout={setUser} />
    </div>
  );
}

export default Home;
