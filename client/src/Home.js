import React from "react";
import NavBar from "./NavBar";

function Home({ user, setUser, servers }) {
  return (
    <div>
      <NavBar logout={setUser} servers={servers}/>
      <div className="body">
        Home Page
      </div>
    </div>
  );
}

export default Home;
