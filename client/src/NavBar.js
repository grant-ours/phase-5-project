import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
// import styled from "styled-components"

function NavBar({ logout }) {
    const [servers, setServers] = useState([])

    useEffect(() => {
        fetch("/api/servers")
          .then((response) => {
            if (response.ok) {
              response.json().then((servers) => setServers(servers));
            }
          });
      }, []);

   
    function handleClick(e) {
        fetch("/logout", {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                logout(null);
            }
        });
    }
    const server = servers.map((server) => {
        console.log(server)
        return (
            <div>
                <button key={server.name}>{server.name}</button>
            </div>
        )
        
    })

    return (
    <nav className="navbar">
        <div>
            {server}
        </div>
        <Link to="/create_server">Create Server?</Link>
        <button onClick={handleClick}>Logout</button>
        {/* <div className="link">
            <Link to="/">Friends</Link>
        </div>
        <div className="link">
            <Link to="/buy">Servers</Link>
        </div>
        <div className="link">
            <Link to="/sell">Sell</Link>
        </div> */}
    </nav>
    )
}

export default NavBar


