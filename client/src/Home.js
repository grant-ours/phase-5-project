import React from "react";
import NavBar from "./NavBar";
import ListOfServers from "./ListOfServers";

function Home({ setUser, servers, setServers }) {
  return (
    <div>
      <NavBar logout={setUser} servers={servers} />
      <div className="body">
        <br></br>
        <h1 className="center">List of All Servers</h1>
        <h3 className="center">Here you can join new servers!</h3>
        <br></br>
        <br></br>
        <ListOfServers setServers={setServers} servers={servers} />
      </div>
    </div>
  );
}

export default Home;
