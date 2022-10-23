import React from "react";
import NavBar from "./NavBar";
import ListOfServers from "./ListOfServers";

function Home({ setUser, servers, setServers }) {
  return (
    <div>
      <NavBar logout={setUser} servers={servers}/>
      <div className="body">
        Home Page
        <ListOfServers setServers={setServers} LoS={servers}/>
      </div>
    </div>
  );
}

export default Home;
